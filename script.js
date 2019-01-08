// Create rod arrays
let rod1 = []
let rod2 = []
let rod3 = []

// grab disks and store in variables
const diskSm1 = document.querySelector('#small-disk')
const diskMd2 = document.querySelector('#med-disk')
const diskLg3 = document.querySelector('#lg-disk')

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

// add listen to clicks to the disks, execute 1st click fx
function enableDiskClick() {
    diskSm1.addEventListener('click', diskClick)
    diskMd2.addEventListener('click', diskClick)
    diskLg3.addEventListener('click', diskClick)
}

// declare fx to disable the disk clicks
function removeDiskClick() {
    diskSm1.removeEventListener("click", diskClick)
    diskMd2.removeEventListener("click", diskClick)
    diskLg3.removeEventListener("click", diskClick)
}

// add listen for click to the rods, execute 2nd click fx
rodObj1.addEventListener('click', rodClick)
rodObj2.addEventListener('click', rodClick)
rodObj3.addEventListener('click', rodClick)

// declare fx for when a disk is clicked
function diskClick() {
    // store the current disk's data-id in 'diskId'
	let diskId = event.target.getAttribute("data-id")
    // // create copy of the clicked disk
    // let diskCopy = diskId
    // move the clicked disk's id to the inPlay array
    disksInPlay.push(diskId)
    // Add this text to 'message'
    document.querySelector("#message").innerHTML = "Where would you like to move your disk? Click on the rod"
    // console.log(disksInPlay)
     // remove the firstClick fx, then
    // event.target.removeEventListener("click", firstClick)
}

// create event listener for the click on the rod, that would execute the following
function rodClick() {
    // store the current rod's id in 'rodId'
    let rodId = event.target.getAttribute("id")
    let currentRodArray
    // if (rodId == 'rod-1') // use rod1 array below
    // if (rodId == 'rod-2') // use rod2
    // if (rodId == 'rod-3') // use rod3
    // console.log(rodId)

    // switch statements?
    switch(rodId) {
        case 'rod-1':
        currentRodArray = rod1;
        break;
        case 'rod-2':
        currentRodArray = rod2;
        break;
        case 'rod-3':
        currentRodArray = rod3;
        break;
    }
    console.log(currentRodArray)
    
    // if the current rod array is empty, 
    if (currentRodArray = []) {
        // push first item of disksInPlay to the selected rod array
        currentRodArray.push(disksInPlay[0])
        // console.log(disksInPlay)
        // console.log(currentRodArray)
        // add text to message
        document.querySelector("#message").innerHTML = "Click on the next disk to move!"
        // clear disksinPlay
        disksInPlay = []
    // otherwise, 
    } else {
         // make a copy of the last number of the selected rod array, then
        let copyOfLast = currentRodArray[(currentRodArray.length)-1]
        // push that copy to disksInPlay, then
        disksInPlay.push(copyOfLast)
        // console.log(disksInPlay)
        // compare values
        if (disksInPlay[0] < disksInPlay[1]) {
            // push the disk from firstClick to the rod array selected in secondClick, then
            // how to refer to diskID when it was created locally
            currentRodArray.push(disksInPlay[0])
            // clear disksInPlay
            disksInPlay = []
            // put eventlistener for firstclick back
            enableDiskClick()
            // check for a win
            checkForWin()
        } else {
            // Add this text to 'message'
            document.querySelector("#message").innerHTML = "Illegal move, please try again"
            // remove last item from disksInPlay
            disksInPlay.pop
            // disable event listener for firstClick
            removeDiskClick()
        }
        
    }
}
// create logic to check for win
let checkForWin = () => {
    if (rod3 === [3,2,1]) {
        // Add this text to 'message'
        document.querySelector("#message").innerHTML = "Congratulations, you have won the game!  Hit reset to play again!"
        // clear disksInPlay
        disksInPlay = []
    }
}