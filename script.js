// Create rod arrays
let rod1 = []
let rod2 = []
let rod3 = []

// grab disks and store in variables
const diskSm1 = document.querySelector('#a')
const diskMd2 = document.querySelector('#b')
const diskLg3 = document.querySelector('#c')

// grab disk ids
const diskId1 = diskSm1.getAttribute("id")
const diskId2 = diskMd2.getAttribute("id")
const diskId3 = diskLg3.getAttribute("id")

// grab rods and store in variables
const rodObj1 = document.querySelector('#rod-1')
const rodObj2 = document.querySelector('#rod-2')
const rodObj3 = document.querySelector('#rod-3')

// array for disks in play
let disksInPlay = []

// function to start or restart the game
let gameStart = () => {
    rod1.push(diskId3, diskId2, diskId1)
    // position the disks in rodcol1
    let startParent = document.getElementById('rodcol1')
    startParent.insertBefore(diskLg3, startParent.childNodes[0])
    startParent.insertBefore(diskMd2, startParent.childNodes[0])
    startParent.insertBefore(diskSm1, startParent.childNodes[0])
    
    disksInPlay.length = 0
    rod2.length = 0
    rod3.length = 0
    // Add this text to 'message'
    document.querySelector("#message").innerHTML = "Ready to play? Click on the top disk!"
    diskSm1.addEventListener('click', diskClick)
}

gameStart()
// test gameStart
// console.log(rod1) 

// get reset button, store in 'resetButton'
let resetButton = document.querySelector(".reset")
// add the gameStart fx to the reset button
resetButton.addEventListener("click", gameStart)

// add listener clicks to the disks, execute diskClick fx
function enableDiskClick() {
    diskSm1.addEventListener('click', diskClick)
    diskMd2.addEventListener('click', diskClick)
    diskLg3.addEventListener('click', diskClick)
}

// declare fx to disable the disk clicks
function disableDiskClick() {
    diskSm1.removeEventListener("click", diskClick)
    diskMd2.removeEventListener("click", diskClick)
    diskLg3.removeEventListener("click", diskClick)
}

// add listen for click to the rods, execute 2nd click fx
function enableRodClick() {
    rodObj1.addEventListener('click', rodClick)
    rodObj2.addEventListener('click', rodClick)
    rodObj3.addEventListener('click', rodClick)
}

function disableRodClick() {
    rodObj1.removeEventListener("click", rodClick)
    rodObj2.removeEventListener("click", rodClick)
    rodObj3.removeEventListener("click", rodClick)
}

// create logic to check for win
function checkForWin() {
    console.log("I'm checking for a winner " + rod3)
    if (rod3.length ===3) {
        console.log("show state of rod 3 " + rod3)
        // Add this text to 'message'
        document.querySelector("#message").innerHTML = "Congratulations, you have won the game!  Hit reset to play again!"   
        disableDiskClick()
        disableRodClick()
    }
}

// putting the wasStackedOn parent ID here
let rodEval = []

// declare fx for when a disk is clicked
function diskClick() {
    // store the current disk's id in 'diskId'
    let diskId = event.target.getAttribute("id")
    // grab the disk element
    let diskNode = document.getElementById(diskId)
    // need a var to represent the rod it's stacked on
    let wasStackedOn = diskNode.parentNode
    // create var to store the parent id
    let stackedOnId = wasStackedOn.getAttribute("id")
    // move the clicked disk's id to the inPlay array

    if(stackedOnId == 'rodcol1') {
        checkIfSmallest(rod1)
    } else if (stackedOnId == 'rodcol2') {
        checkIfSmallest(rod2)
    } else if (stackedOnId == 'rodcol3') {
        checkIfSmallest(rod3)
    }

    // function checkIfSmallest(rodNum){
        
    //     for(i=0;i<rodNum.length;i++) {
    //         if (diskId > rodNum[i]) {
    //              // Add this text to 'message'
    //             document.querySelector("#message").innerHTML = "Illegal move, please try again"
    //         }
    //     }   
    // }

    function checkIfSmallest(rodNum){
        console.log("rod array when checking for legal click " + rodNum)
        if (diskId > rodNum[1]) {
            document.querySelector("#message").innerHTML = "Illegal move, please try again"
        } else {
            restOfFunction()
        }
        for(i=0;i<rodNum.length;i++) {
            if (diskId > rodNum[i]) {
                 // Add this text to 'message'
                
            }
        }   
    }

    function restOfFunction() {
        disksInPlay.push(diskId)
        // make the rod it was stacked on' id global
        rodEval.push(stackedOnId)
        // Add this text to 'message'
        document.querySelector("#message").innerHTML = "Where would you like to move your disk? Click on the rod"
        enableRodClick()
        disableDiskClick()
    }
}


function rodClick() {
    // store the clicked rod's id in 'rodId'
    let rodId = event.target.getAttribute("id")
    // find the array that corresponds with the clicked rod
    if(rodId == 'rod-1') {
        // run check below, using rod1
        let parent1 = document.querySelector('#rodcol1')
        check(rod1,parent1)
    } else if (rodId == 'rod-2') {
        // run check below, using rod2
        let parent2 = document.querySelector('#rodcol2')
        check(rod2,parent2)
    } else if (rodId == 'rod-3') {
        // run check below, using rod3
        let parent3 = document.querySelector('#rodcol3')
        check(rod3,parent3)
    }
       
    function check(rodx, parent) {
    // if the current rod array is empty, 
        if (rodx.length < 1) { 
            // push first item of disksInPlay to the selected rod array
            rodx.push(disksInPlay[0])
// this isn't working
            console.log("this is disksInPlay[0]" + disksInPlay)
            let currentDiskObj = document.getElementById(disksInPlay[0])
            console.log("this is the currentDisk Obj, is node? " + currentDiskObj)
            
            // moves the disk to the correct column
            parent.insertBefore(currentDiskObj, parent.childNodes[0])

            // removes the disk from its prior array
            console.log("this is rodEval right now " + rodEval)
            if(rodEval == 'rodcol1') {
                // remove last disk from rod1 array
                rod1.pop()
                rodEval.length = 0
            } else if (rodEval == 'rodcol2') {
                rod2.pop()
                rodEval.length = 0
            } else if (rodEval == 'rodcol3') {
                rod3.pop()   
                rodEval.length = 0
            }
            
            document.querySelector("#message").innerHTML = "Click on the next disk to move!"
            // clear disksinPlay
            disksInPlay.length = 0
            // enable diskclick
            enableDiskClick()
            disableRodClick()
        // otherwise, 
        } else {
            // make a copy of the last number of the selected rod array, then
            let copyOfLast = rodx[((rodx.length)-1)]
            
            // push that copy to disksInPlay, then
            disksInPlay.push(copyOfLast)
            
            // is move legal? if so,
            if (disksInPlay[0] < disksInPlay[1]) {
                // push the disk from firstClick to the rod array selected in secondClick, then
                
                rodx.push(disksInPlay[0])
                // move the disk to the rod
                let smallerDisk = document.getElementById(disksInPlay[0])
                parent.insertBefore(smallerDisk, parent.childNodes[0])
                // removes the disk from its prior array
                console.log("this is rodEval right now " + rodEval)
                if(rodEval == 'rodcol1') {
                    // remove last disk from rod1 array
                    rod1.pop()
                    rodEval.length = 0
                    
                } else if (rodEval == 'rodcol2') {
                    rod2.pop()
                    rodEval.length = 0
                   
                } else if (rodEval == 'rodcol3') {
                    rod3.pop()
                    rodEval.length = 0
                    
                }
                document.querySelector("#message").innerHTML = "Click on the next disk to move!"
                // clear disksInPlay
                disksInPlay = []
                // put eventlistener for firstclick back
                enableDiskClick()
                disableRodClick()
                // check for a win
                checkForWin()
            } else {
                // Add this text to 'message'
                document.querySelector("#message").innerHTML = "Illegal move, please try again"
                // remove last item from disksInPlay
                disksInPlay=[]
                // clear rodEval
                rodEval = []
                enableDiskClick()
            }
            
        }
    console.log("end of turn rod1, rod2, rod3 " + rod1 + " " + rod2 + " " + rod3)    
    }
}