var wordList = ["yokoo","terje","priku","djebali"];
var attempts
var lettersGuessed = []
var wins = 0
var currentArtist
var splitArtist
var guesses
var correctGuess=[]
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


var arraytest = [ ["yokoo","terje","priku","djebali"],
 ["assets/images/yokoo.jpg","assets/images/terje.jpg","assets/images/priku.jpg","assets/images/djebali.jpg"],
 ["assets/music/Yokoo.mp3","assets/music/Inspector Norse.mp3","assets/music/Priku.mp3","assets/music/Djebali.mp3"]]




document.getElementById("reset").onclick = function resetgame()
{

attempts = 7

targetPicture = document.getElementById("pictureholder")
targetPicture.innerHTML = ""



targetAttempt = document.getElementById("attempts")
targetAttempt.innerHTML = "Attempts Remaining: " + attempts;
targetAttempt.setAttribute("style","color:red;")

lettersGuessed = []
var targetDiv = document.getElementById("currentword")
targetDiv.innerHTML = ""


currentArtist = wordList[Math.floor(Math.random()*wordList.length)];
splitArtist = currentArtist.split("")
guesses = new Array(currentArtist.length);
correctGuess = [];

for (i=0; i<currentArtist.length; i++)
{
guesses[i] = "__ "
}

printguessField(guesses)

var target = document.getElementById("Alreadyguessed")
target.innerHTML= ""


}



function printGuessed(userinput){

  var alreadyGuessed = document.getElementById("Alreadyguessed")
  var y = document.createElement("span")
  y.innerHTML = userinput + ", "
  alreadyGuessed.appendChild(y)
  y.setAttribute("style", "font-size:18pt; font-weight:bold; color:red")
}

function checkforlose(){

  if (attempts === 0)
  {
    lose()
  }
}





function checkforwin(){
  var re = /,/gi;
  var newstring = guesses.toString()
  var newstring = newstring.replace(re,"");

  if(newstring===currentArtist)
  {
    wins++
    win(currentArtist)
    updatewins()
    console.log(wins)
  }

}

function updatescore(){
  targetDiv = document.getElementById("attempts")
  targetDiv.innerHTML = "Attempts Remaining: " + (attempts);
}

function updatewins(){
targetDiv = document.getElementById("wins")
targetDiv.setAttribute("style", "color:red; font-size:18pt")
targetDiv.innerHTML = "Wins: " + wins ;
}

function lose(){
  alert("He's Dead")
}

function win(){
var x = arraytest[0].indexOf(currentArtist)
var targetDiv = document.getElementById("pictureholder")
var newimg = document.createElement("img")
newimg.setAttribute("src",arraytest[1][x])
newimg.setAttribute("style","width:300px;height:300px;z-index:5;float:left")
targetDiv.appendChild(newimg)


var targetTrack = document.getElementById("myAudio")
targetTrack.setAttribute("src",arraytest[2][x])
targetTrack.play();
}


function alreadyguessedPrompt(userinput){

  alert("You have already guessed that letter. Try a different one.");

}


function resetfield(){

var targetDiv = document.getElementById("currentword")
targetDiv.innerHTML = ""
}


function printguessField(guesses){

var targetDiv = document.getElementById("currentword")

for (i=0; i <guesses.length; i++)

{
  var guessedLetter = document.createElement("span")
  guessedLetter.innerHTML = (guesses[i] + " ");
  targetDiv.appendChild(guessedLetter);
  guessedLetter.setAttribute("style","font-size:20pt; color:red")

}

}



document.getElementById("textinput").onkeyup=function listenkey(event)
{

  var userinput = event.key
  userinput = userinput.toLowerCase();
  console.log(event.key)

document.getElementById("submit").onclick = function checkletter(){
textinput.value = ""

if(alphabet.indexOf(userinput)=== -1)
{
  alert("Please Choose a Valid Letter (a-z)")
  return 0
}

for(i=0; i<lettersGuessed.length; i++)
{
  if(userinput === lettersGuessed[i])
  {
    alreadyguessedPrompt()
    return
  }
}
  if (splitArtist.indexOf(userinput) === -1)
  {
   attempts--;
   lettersGuessed.push(userinput)
   printGuessed(userinput);

 }


for(j=0; j<splitArtist.length ; j++)

{
  if(userinput === splitArtist[j])
  {
    console.log("yes")
    guesses.splice(j,1,userinput)
    correctGuess.push(userinput)
    lettersGuessed.push(userinput)

  }

}

updatescore()
resetfield()
printguessField(guesses)
checkforwin()
checkforlose()

}
}

function startgame(){


attempts = 7


targetAttempt = document.getElementById("attempts")
targetAttempt.innerHTML = "Attempts Remaining: " + attempts;
targetAttempt.setAttribute("style","color:red;")




currentArtist= wordList[Math.floor(Math.random()*wordList.length)];
splitArtist = currentArtist.split("")
guesses = new Array(currentArtist.length);
var correctGuess = [];

for (i=0; i<currentArtist.length; i++)
{
guesses[i] = "__ "
}

printguessField(guesses)


}

startgame()
