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
}

gameStart()
// test gameStart
console.log(rod1) 

// get reset button, store in 'resetButton'
let resetButton = document.querySelector(".reset")

// add the gameStart fx to the reset button
resetButton.addEventListener("click", gameStart)

// create fx for when a disk is clicked
let firstClick = () => {
    // store the current disk's data-id in 'diskId'
	let diskId = event.target.getAttribute("data-id")
    // create copy of the clicked disk
    let diskCopy = diskId
    // code to move the clicked disk copy to the inPlay array
    disksInPlay.push(diskCopy)
    // Add this text to 'message'
    document.querySelector("#message").innerHTML = "Where would you like to move your disk? Click on the rod"
}

// add listen to clicks to the disks, execute 1st click fx
diskSm1.addEventListener('click', firstClick)
diskMd2.addEventListener('click', firstClick)
diskLg3.addEventListener('click', firstClick)

// create event listener for the second click on the rod, that would execute the following
let secondClick = () => {
    // store the current rod's id in 'rodId'
	let rodId = event.target.getAttribute("id");
    // if the current rod array is empty, 
    if (rodId = []) {
        // push disksInPlay[0] to the selected rod
        rodId.push(disksInPlay[0])
    // otherwise, 
    } else {
         // make a copy of the last number of the selected rod array, then
        let copyOfLast = rodId[(rodId.length)-1]
        // push that copy to disksInPlay, then
        disksInPlay.push(copyOfLast)
        // compare values
        if (disksInPlay[0] < disksInPlay[1]) {
            // push the disk from firstClick to the rod array selected in secondClick, then
            // how to refer to diskID when it was created locally
            rodId.push(diskId)
            // clear disksInPlay
            disksInPlay = []
            // check for a win
            checkForWin()
        } else {
            // Add this text to 'message'
            document.querySelector("#message").innerHTML = "Illegal move, please try again"
            // clear disksInPlay
            disksInPlay = []
        }
        
    }
}

// add listen to click to the rods, execute 2nd click fx
rodObj1.addEventListener('click', secondClick)
rodObj2.addEventListener('click', secondClick)
rodObj3.addEventListener('click', secondClick)

// create logic to check for win
let checkForWin = () => {
    if (rod3 === [3,2,1]) {
        // Add this text to 'message'
        document.querySelector("#message").innerHTML = "Congratulations, you have won the game!  Hit reset to play again!"
        // clear disksInPlay
        disksInPlay = []
    }
}