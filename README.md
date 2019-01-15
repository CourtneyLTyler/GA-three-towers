# GA-three-towers
Hanoi towers game creation

## Description
This project is a coding challenge to render the Towers of Hanoi game.  This game involves shifting disks into various piles, while adhering to specified rules, to ultimately recreate the original disk order on the final tower.
Creating this project involved solving many coding challenges, the main of which was laying out the full logic for a game from scratch and ensuring that it executes.
## Brief Example
Below is an example of the game setup code


![snippet of gameboard setup code](images/codesnipsmall.png?raw=true)

![snippet of rendered gameboard](images/rendersnipsmall.png?raw=true)
## Features
### Bronze - Completed
* Game board is set up correctly
* Disks move to towers as indicated
* Follows rules
* Does not allow illegal moves
* Announces winner at appropriate point and stops game

### Silver - Completed
* Appropriate visual representation of how the game might look IRL
* Does not run functions out of order (diskClick cannot run when it's rodClick's turn to run)
* Reset button that returns the gameboard to its original state and clears in-play arrays
* Timer that runs following a user click
* Timer that stops following user win and renders the stopped time
### Gold - Attempted
* Scoring based on user time
* Save user scores despite refresh

## List of Technologies Used
* HTML
* CSS
* JavaScript
* DOM
* GitHub
* Terminal
* VSCode

## Hurdles and Ongoing Challenges

### Process - It all started with three empty arrays....
The process began with pen and paper, writing narratives for the various features of the game.  I began ordering, layering, and planning out the interconnectivity of the features.  From here I began the actual coding process with three empty arrays.  I worked through the problems with JavaScript only, then began to realize that I needed to tie in HTML elements and use DOM manipulation to do so.  I enjoyed the process of creating the logic and making the game functional, as well as the process of fixing and debugging until the game appeared to run smoothly.  
### My biggest hurdle
This came when I decided to add a timer.  I looked at a few tutorials and began to create one, however there were so many bugs that I spent an entire (long) day attempting to debug the code.  As a result, I used code from a (cited) online source and worked my way through it.  Although I would have liked to be able to produce my own code for it, I did spend plenty of time researching and interacting with the various working parts of a standard javascript timer feature.  
### Ongoing challenges
As a result of spending so much time attempting to debug my timer I was unable to work towards a time-based scoring mechanism and a feature to store those scores beyond page refresh.  
### In summary
This was a tremendous learning experience.  In creating code for a math game from scratch, I learned some practices that work best for me through the process.  In debugging I learned various ways to use the developer tools program to discover issues more efficiently.  During my day of attempting to create my own timer, I learned lessons in time managemenet, and some debugging strategies to avoid in the future.  In using existing code to create the timer I learned how to work backwards from a template and ensure my understanding of each line.  

## Citation
I used code from the site below to complete the timer feature.
[https://jsfiddle.net/Daniel_Hug/pvk6p/]
## Installation Instructions
* Fork this repository
* Copy the provided link, then Clone locally
* Open the file in your text editor
## Contribution Guildelines
If you would like to contribute code, point out bugs, or propose improvements, please see the below:

Repository: [https://github.com/CourtneyLTyler/GA-three-towers]

Issues: [https://github.com/CourtneyLTyler/GA-three-towers/issues]