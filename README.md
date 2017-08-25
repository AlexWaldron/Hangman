## Hangman
Come play Hangman and relive your glory days as a bored elementary school student!

## Instructions
Click the play the button in order to get the game started.The blanks for the word will appear and then you can start guessing! Every time you type a letter one of two things will happen,either you are wrong and red x will appear or you get the guess correct! When you guess correctly the letter you guessed will appear within the blanks. That's the game folks and remember...Existance is pain to a Meeseeks! So don't worry if you lose! Also you can always click the reset button to get a new word.

## Technologies

To make this game I used Jquery in order to manipulate the Dom. CSS and a third party CSS styler called Materialize in order to set up the
look of the page. HTML to create the structure and AJAX calls in order to hit an API for a random english word.

## Roadblocks
Styling the page was particularly difficult and making it responsive was fairly difficult because I don't have much experience yet with
web app development. Also turning event listeners on and off at the appropriate time took a little bit of logic and some trial and error,
but overall making this was a very fun experience!

## Future Plans

I currently added a timer and score keeper, but I would eventually like to make it into a high scores table so that multiple people
can play and compete to see who's the best at hangman. I also want to do more with making it look nicer and more mobile friendly.

## Bugs
The game is pretty functional right now! I had to work through a couple of the bugs with the letter check function
because if before you could just enter any correct letter that the word contained and then just keep hitting it in order to window
but I handled that by adding the guesses to an array and first checking the array before checking the letter against the random word.

## Process

I first tried to get a board to appear based on the number of letters of a word. Then once I did that I created a function buttons with the letters of the alphabet on it. Once I finished that I did that I looped through the letters of the word and gave them an ID that was
the same as their letter. Then I created a function attached to a click listener that basically checked if the letter they clicked was equal to the ID of any box then place that letter in the box with the matching ID. After that I generalized the function so that I was
able to type on my keyboard as well as click the buttons so that people playing on a lap top didn't have to click so much. I then added
some media queries so that mobile users would use the buttons and laptop users have to use the keyboard. And from there it was all styling and adding fun features like the Meeseeks soundbyte!
