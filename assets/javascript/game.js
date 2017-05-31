var wordList = ["yokoo", "sabo"];
var attempts
var lettersGuessed = []
var wins = 0
var currentArtist
var splitArtist
var guesses
var correctGuess=[]


var artists = {
  "yokoo" : "https://www.residentadvisor.net/images/events/flyer/2016/3/au-0304-803575-front.jpg",
  "sabo" : "http://www.projectrevolver.org/wp-content/uploads/2016/05/Sabo_Tulum_5x3.75-fit.jpg",
}




document.getElementById("reset").onclick = function resetgame()
{

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
  y.setAttribute("style","color:red;")
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
  }

}

function updatescore(){
  targetDiv = document.getElementById("attempts")
  targetDiv.innerHTML = "Attempts Remaining: " + (attempts);
}

function updatewins(){
targetDiv = document.getElementById("wins")
targetDiv.innerHTML = "Wins: " + wins ;
}



function win(currentArtist){
var targetDiv = document.getElementById("pictureholder")
var newimg = document.createElement("img")
newimg.setAttribute("src","https://www.residentadvisor.net/images/events/flyer/2016/3/au-0304-803575-front.jpg")
newimg.setAttribute("style","width:100px;height:100px;z-index:5")
targetDiv.appendChild(newimg)

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
  guessedLetter.innerHTML = (guesses[i]);
  targetDiv.appendChild(guessedLetter);
}

}



document.getElementById("textinput").onkeyup=function listenkey(event)
{

  var userinput = event.key
  console.log(event.key)

document.getElementById("submit").onclick = function checkletter(){
submit.value = ""

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

}
}

function startgame(){

attempts = 10


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
