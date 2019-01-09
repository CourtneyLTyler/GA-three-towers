// Create rod arrays
let rod1 = []
let rod2 = []
let rod3 = []

// grab disks and store in variables
const diskSm1 = document.querySelector('#a')
const diskMd2 = document.querySelector('#b')
const diskLg3 = document.querySelector('#c')

// grab rods and store in variables
const rodObj1 = document.querySelector('#rod-1')
const rodObj2 = document.querySelector('#rod-2')
const rodObj3 = document.querySelector('#rod-3')

// array for disks in play
let disksInPlay = []

// function to start or restart the game
let gameStart = () => {
    rod1.push(diskLg3, diskMd2, diskSm1)
    disksInPlay = []
    rod2 = []
    rod3 = []
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

// declare fx for when a disk is clicked
function diskClick() {
    // store the current disk's data-id in 'diskId'
    let diskId = event.target.getAttribute("id")
    // move the clicked disk's id to the inPlay array
    disksInPlay.push(diskId)
    // Add this text to 'message'
    document.querySelector("#message").innerHTML = "Where would you like to move your disk? Click on the rod"
    console.log("has the clicked disk's id " + disksInPlay)
     // remove the firstClick fx, then
    // event.target.removeEventListener("click", firstClick)
    enableRodClick()
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
            console.log("rod was empty, now it has " + rodx)
            // this is querySelector does not work
            let dataAtt = document.getElementById(disksInPlay[0])
            console.log("this is the disk just clicked " + dataAtt)

            
            parent.insertBefore(dataAtt, parent.childNodes[0])
            // console.log(disksInPlay)
            // console.log(currentRodArray)
            // add text to message
            document.querySelector("#message").innerHTML = "Click on the next disk to move!"
            // clear disksinPlay
            disksInPlay = []
            // enable diskclick
            enableDiskClick()
            disableRodClick()
        // otherwise, 
        } else {
            // make a copy of the last number of the selected rod array, then
            let copyOfLast = rodx[((rodx.length)-1)]
            // change it to a string
            // let stringyCopy = String(copyOfLast)
            console.log("this should be a string" + copyOfLast)
            // push that copy to disksInPlay, then
            disksInPlay.push(copyOfLast)
            console.log("has previous disk and " + disksInPlay)
            // compare values
            if (disksInPlay[0] < disksInPlay[1]) {
                // push the disk from firstClick to the rod array selected in secondClick, then
                // how to refer to diskID when it was created locally
                rodx.push(disksInPlay[0])
                // move the disk to the rod
                let smallerDisk = document.getElementById(disksInPlay[0])
                parent.insertBefore(smallerDisk, parent.childNodes[0])
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
                disksInPlay.pop()
            }
            
        }
    }
}
// create logic to check for win
let checkForWin = () => {
    if (rod3 === [3,2,1]) {
        // Add this text to 'message'
        document.querySelector("#message").innerHTML = "Congratulations, you have won the game!  Hit reset to play again!"
    }
}