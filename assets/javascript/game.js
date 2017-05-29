var wordList = ["yokoo", "sabo","dubfire"];
var attempts = 10
var lettersGuessed = []

var targetAttempts = document.getElementById("attempts")
var x = document.createElement("div")
x.innerHTML = attempts;
targetAttempts.appendChild(x)


var currentArtist = wordList[Math.floor(Math.random()*wordList.length)];
var splitArtist = currentArtist.split("")
var guesses = new Array(currentArtist.length);
var correctGuess = [];

for (i=0; i<currentArtist.length; i++)
{
guesses[i] = "__ "
}


function checkforwin(){
  var re = /,/gi;
  var newstring = guesses.toString()
  var newstring = newstring.replace(re,"");

  if(newstring===currentArtist)
  {
    alert("win")
  }

}

function updatescore(){

  x.innerHTML= (attempts);

}


function win(){

}


function alreadyguessed(userinput){

  console.log("already guessed");

}


function reset(){

var targetDiv = document.getElementById("currentword")
targetDiv.innerHTML = ""
}


function printguessField(){

var targetDiv = document.getElementById("currentword")

for (i=0; i <guesses.length; i++)

{
  var guessedLetter = document.createElement("span")
  guessedLetter.innerHTML = (guesses[i]);
  targetDiv.appendChild(guessedLetter);
}

}
printguessField()



document.getElementById("textinput").onkeyup=function listenkey(event)
{

  var userinput = event.key
  console.log(event.key)

document.getElementById("submit").onclick = function checkletter(){
for(i=0; i<lettersGuessed.length; i++)
{
  if(userinput === lettersGuessed[i])
  {
    alreadyguessed()
    return
  }
}
  if (splitArtist.indexOf(userinput) === -1)
  {
   attempts--;
   lettersGuessed.push(userinput)

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
reset()
printguessField()
checkforwin()

}
}
