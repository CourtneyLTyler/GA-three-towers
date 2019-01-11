let rod1 = []
let rod2 = []
let rod3 = []

// grab disk objects
const diskSm1 = document.querySelector('#a')
const diskMd2 = document.querySelector('#b')
const diskLg3 = document.querySelector('#c')

// grab disk ids
const diskId1 = diskSm1.getAttribute("id")
const diskId2 = diskMd2.getAttribute("id")
const diskId3 = diskLg3.getAttribute("id")

// grab rodcol objects
const rodObj1 = document.querySelector('#stick1')
const rodObj2 = document.querySelector('#stick2')
const rodObj3 = document.querySelector('#stick3')

let disksInPlay = []

let gameStart = () => {
    rod1.length = 0
    // add the Ids to rod1 array
    rod1.push(diskId3, diskId2, diskId1)
    // position the html - disks in rodcol1
    let startParent = document.getElementById('rodcol1')
    startParent.appendChild(diskLg3)
    startParent.appendChild(diskMd2)
    startParent.appendChild(diskSm1)
    disksInPlay.length = 0
    rod2.length = 0
    rod3.length = 0
    document.querySelector("#message").innerHTML = "Ready to play? Click on the top disk!"
    diskSm1.addEventListener('click', diskClick)
    disableRodClick()
}

gameStart()

let resetButton = document.querySelector(".reset")
resetButton.addEventListener("click", gameStart)

// add listener clicks to the disk objects
function enableDiskClick() {
    diskSm1.addEventListener('click', diskClick)
    diskMd2.addEventListener('click', diskClick)
    diskLg3.addEventListener('click', diskClick)
}

function disableDiskClick() {
    diskSm1.removeEventListener("click", diskClick)
    diskMd2.removeEventListener("click", diskClick)
    diskLg3.removeEventListener("click", diskClick)
}

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

function checkForWin() {
    if (rod3.length ===3) {
        document.querySelector("#message").innerHTML = "Congratulations, you have won the game!  Hit reset to play again!"   
        disableDiskClick()
        disableRodClick()
    }
}

// will put the wasStackedOn parent ID here
let rodEval = []

function diskClick() {
    // store the current disk's id
    let diskId = event.target.getAttribute("id")
    // grab the disk object
    let diskNode = document.getElementById(diskId)
    // grab the parent object
    let wasStackedOn = diskNode.parentNode
    // store the parent id
    let stackedOnId = wasStackedOn.getAttribute("id")

    // figure out which array to use in checkIfSmallest based on parent id of clicked disk
    if(stackedOnId == 'rodcol1') {
        checkIfSmallest(rod1)
    } else if (stackedOnId == 'rodcol2') {
        checkIfSmallest(rod2)
    } else if (stackedOnId == 'rodcol3') {
        checkIfSmallest(rod3)
    }

    function checkIfSmallest(rodNum){
        // if the current disk is larger than the disk already stored in the corresponding rod array
        if (diskId > rodNum[1]) {
            document.querySelector("#message").innerHTML = "Illegal move, please try again"
        } else {
            restOfFunction()
        }  
    }

    function restOfFunction() {
        // add the current diskId to disksInPlay array
        disksInPlay.push(diskId)
        // push the parent of the clicked disk's id to rodEval to make it global
        rodEval.push(stackedOnId)
        document.querySelector("#message").innerHTML = "Where would you like to move your disk? Click on the rod"
        enableRodClick()
        disableDiskClick()
    }
}

function rodClick() {
    // store the clicked sticks's id 
    let rodId = event.target.getAttribute("id")
    // find the array that corresponds with the clicked rod
    if(rodId == 'stick1') {
        // grab the corresponding parent obj 
        let parent1 = document.querySelector('#rodcol1')
        // use the corresponding rod array and parent obj in the check fx below
        check(rod1,parent1)
    } else if (rodId == 'stick2') {
        let parent2 = document.querySelector('#rodcol2')
        check(rod2,parent2)
    } else if (rodId == 'stick3') {
        let parent3 = document.querySelector('#rodcol3')
        check(rod3,parent3)
    }
       
    function check(rodx, parent) {
    // if the current rod array is empty, 
        if (rodx.length < 1) { 
            // push first item of disksInPlay to the selected rod array
            rodx.push(disksInPlay[0])
            // store the first item of the disksInPlay array
            let currentDiskObj = document.getElementById(disksInPlay[0])
            // move it to the correct column
            parent.appendChild(currentDiskObj)
            // remove the disk from its prior array
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
            disksInPlay.length = 0
            enableDiskClick()
            disableRodClick()
        } else {
            // make a copy of the last member of the selected rod array, then
            let copyOfLast = rodx[((rodx.length)-1)]
            // push that copy to disksInPlay, then
            disksInPlay.push(copyOfLast)
            // is move legal? if the first item of disksInPlay array is < the second item,
            if (disksInPlay[0] < disksInPlay[1]) {
                // push the first disk from disksInPlay to the corresponding rod array
                rodx.push(disksInPlay[0])
                // grab the diskInPlay object
                let smallerDisk = document.getElementById(disksInPlay[0])
                // move the html - disk to the rod
                parent.appendChild(smallerDisk)
                // remove the disk from its prior array
                if(rodEval == 'rodcol1') {
                    // remove last disk from the corresponding rod array
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
                disksInPlay.length = 0
                enableDiskClick()
                disableRodClick()
                checkForWin()
            } else {
                document.querySelector("#message").innerHTML = "Illegal move, please try again"
                disksInPlay.length = 0
                rodEval.length = 0
                enableDiskClick()
            } 
        }
    }
}