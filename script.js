// Create rod arrays
let rod1 = []
let rod2 = []
let rod3 = []

// grab rods and store in variables
const rodObj1 = document.querySelector('#rod-1')
const rodObj2 = document.querySelector('#rod-2')
const rodObj3 = document.querySelector('#rod-3')

// grab disks and store in variables
const diskSm1 = document.querySelector('#small-disk')
const diskMd2 = document.querySelector('#med-disk')
const diskLg3 = document.querySelector('#lg-disk')

// array for disks in play
let disksInPlay = []

// function to start or restart the game
let gameStart = () => {
    rod1.push(diskLg3, diskMd2, diskSm1)
    disksInPlay = []
    rod2 = []
    rod3 = []
    // Add this text to 'whoseTurn'
    document.querySelector("#ready").innerHTML = "Ready to play? Click on the top disk!"
}

// test gameStart
gameStart()
console.log(rod1) 


// get reset button, store in 'resetButton'
let resetButton = document.querySelector(".reset")
// add the reset fx to the reset button
resetButton.addEventListener("click", gameStart)


// create event listener for the first click on a disk, that would execute the following
// 
let firstClick = () => {
    // store the current disk's data-id in 'diskId'
	let diskId = this.getAttribute("data-id");
    // create copy of the clicked disk
    let diskCopy = diskId
    // code to move the clicked disk copy to the inPlay array
    disksInPlay.push(diskCopy)
    alert("Where would you like to move your disk? Click on the rod")
}

// create event listener for the second click on the rod, that would execute the following
let secondClick = () => {
    // store the current rod's id in 'rodId'
	let rodId = this.getAttribute("id");
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
            alert("Illegal move, please try again")
            // clear disksInPlay
            disksInPlay = []
        }
        
    }
}

// create logic to check for win
let checkForWin = () => {
    if (rod3 === [3,2,1]) {
        alert("Congratulations, you have won the game!  Hit reset to play again!")
    }
}