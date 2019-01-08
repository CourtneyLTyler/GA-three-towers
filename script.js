// Create rods as arrays
let rod1 = []
let rod2 = []
let rod3 = []

// Create disks as numbers
let disk1sm = 1
let disk2md = 2
let disk3lg = 3

// array for disks in play
let disksInPlay = []

// function to start or restart the game
let gameStart = () => {
    rod1.push(disk3lg, disk2md, disk1sm)
    disksInPlay = []
    rod2 = []
    rod3 = []
    alert("Ready to play?  Click on the top disk!")
}

// test gameStart
gameStart()
console.log(rod1) // logs [3,2,1]

// create event listener for clicking on a disk, that would execute the following
let firstClick = () => {
    // code to move the clicked disk to the inPlay array
    disksInPlay.push(event.target)
    alert("Where would you like to move your disk? Click on the rod")
}

// once rod is clicked, 
