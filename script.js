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

// grab rodcols and store in variables
const rodObj1 = document.querySelector('#stick1')
const rodObj2 = document.querySelector('#stick2')
const rodObj3 = document.querySelector('#stick3')

// array for disks in play
let disksInPlay = []

// function to start or restart the game
let gameStart = () => {
    rod1.length = 0
    // add the Ids to rod1 array
    rod1.push(diskId3, diskId2, diskId1)
    // position the disks in rodcol1
    let startParent = document.getElementById('rodcol1')
    startParent.appendChild(diskLg3)
    startParent.appendChild(diskMd2)
    startParent.appendChild(diskSm1)
    disksInPlay.length = 0
    rod2.length = 0
    rod3.length = 0
    // Add this text to 'message'
    document.querySelector("#message").innerHTML = "Ready to play? Click on the top disk!"
    diskSm1.addEventListener('click', diskClick)
    disableRodClick()
}

gameStart()

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

// an example of how to possibly prevent firing the child event from firing the parent event
// document.getElementById('inner').addEventListener('click',function (event){
//     event.stopPropagation();
//  });

// code for timer here
// let minutes = document.getElementById('minutes')
// let seconds = document.getElementById('seconds')
// console.log("these should be objects, no? " + minutes + " " + seconds)

// console.log(new Date())

// // set up timer code structure
// let deployTimer = setInterval(timerGo, 1000) 
// function timerGo() {
//     // code to make timer go
// }
// // put clearInterval in winner fx
// function stopTimer() {
//     clearInterval(deployTimer)
// }

// ORRRR?

// let setTime = setTimeout("fxName()", 1000)

// let clear
// function stopWatch( ) { 
//     // javascript statement here
//     clear = setTimeout( "stopWatch( )", 1000 ); 
// } 

// make variables global
let count = 0 
let clearTime
let seconds = 0 
let minutes = 0 
let hours = 0
// let clearState
let secs = '0' + seconds 
console.log("this should be secs " + secs)
let mins = '0' + minutes + ':' 
let gethours = '0' + hours + ':'
let fulltime = document.getElementById('fulltime')
console.log("should be obj " + fulltime)
let gameTimerObj = document.getElementById("gameTimer") 
console.log("should be obj " + gameTimerObj)
let startBtn = document.getElementById('start-timer')
console.log("should be obj " + startBtn)
// gameTimerObj.innerHTML = gethours + mins + secs

startBtn.addEventListener('click', startTime)


//display the full time 
fulltime.style.display = "block"
let time = gethours + mins + secs
fulltime.innerHTML = 'Your time: ' + time
// reset the timer
seconds = 0
minutes = 0 
hours = 0 
secs = '0' + seconds 
mins = '0' + minutes + ': ' 
gethours = '0' + hours + ': '


function startWatch() { 
    // gameTimerObj.innerHTML = gethours + mins + secs
    // if seconds is 60 add 1 to minutes, and reset seconds
    if (seconds === 60) { 
        seconds = 0 
        minutes = minutes + 1
    } 
    // if there are <10 minutes, display a zero before the minute 
    if (mins = (minutes<10)) {
        mins = '0'+ minutes + ':'
        console.log("minutes are <10 " + mins)
    } else {
        mins = minutes + ':'
    }
    //  if minutes is 60, add 1 to hours and reset minutes
    if (minutes === 60) { 
        minutes = 0 
        hours = hours + 1 
    } 
    // if hours is <10, display a zero before the hour
    if (gethours = (hours<10)) {
        gethours = '0' + hours + ':'
        console.log("hours <10 " + gethours)
    } else {
        gethours = hours + ':'
    }

    if (secs = (seconds<10)) {
        secs = '0' + seconds
        console.log("secs <10 " + secs)
    } else {
        secs = seconds
    }

    // fulltime.style.display = "block"
    // let time = gethours + mins + secs
    // fulltime.innerHTML = 'Your time: ' + time

    // display the stopwatch 
    let displayTheDamnTimer = 'this should display' + gethours + mins + secs
    gameTimerObj.innerHTML = displayTheDamnTimer
    // start adding to seconds
    seconds++ 
    // setTimeout keeps it going and calls it every second
    let clearTime = setTimeout('startWatch()', 1000)
} 

function startTime() { 
    // if all are set to zero, run the code
    if (seconds === 0 && minutes === 0 && hours === 0) { 
        // hide fulltime while timer is running
        fulltime.style.display = "none" 
        // hide start button while timer is running
        this.style.display = "none" 
        // make it go
        startWatch() 
    } 
}

//create a function to stop the time 
function stopTime( ) { 
    /* check if seconds, minutes and hours are not equal to 0 */ 
    // if ( seconds !== 0 || minutes !== 0 || hours !== 0 ) { 
        //display the full time 
        fulltime.style.display = "block"
        let time = gethours + mins + secs
        fulltime.innerHTML = 'Your time: ' + time
        // reset the timer
        seconds = 0
        minutes = 0 
        hours = 0 
        secs = '0' + seconds 
        mins = '0' + minutes + ': ' 
        gethours = '0' + hours + ': '
         /* display the stopwatch after it's been stopped */ 
        // var x = document.getElementById ("timer"); 
        let stoppedTime = gethours + mins + secs; 
        gameTimerObj.innerHTML = stoppedTime 
        // show start button
        startBtn.style.display = "inline-block" 
         /* clear the stop watch using the setTimeout( ) return value 'clearTime' as ID */ 
        clearTimeout(clearTime)
    } 



// create logic to check for win
function checkForWin() {
    if (rod3.length ===3) {
        document.querySelector("#message").innerHTML = "Congratulations, you have won the game!  Hit reset to play again!"   
        disableDiskClick()
        disableRodClick()
        stopTime()
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
        // make the parent of the clicked disk's id global
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
    console.log("should be event target " + event.currentTarget + "also, rodClick fx has run")
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
            // move the current disk to the correct column
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
            // is move legal? 
            // if the first item of disksInPlay array is < the second item,
            if (disksInPlay[0] < disksInPlay[1]) {
                // push the first disk from disksInPlay to the corresponding rod array
                rodx.push(disksInPlay[0])
                // grab the diskInPlay object
                let smallerDisk = document.getElementById(disksInPlay[0])
                // move the disk to the rod
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
    console.log("end of turn rod1, rod2, rod3 " + rod1 + " " + rod2 + " " + rod3)    
    }
}