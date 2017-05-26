
var artists = ["Yokoo","Sabo"]     

var attempts = 0

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var correctGuesses = []

var blankarray = []



// picks a random word from the artist array and places it in the html
function randomword(){
var currentArtist = artists[Math.floor(Math.random()*artists.length)];


var splitArtist = currentArtist.split('');


 var letterPlaces =currentArtist.length 




var targetdiv = document.getElementById("wordtobeGuessed");
targetdiv.innerHTML = "__ "

for(i=0; i<letterPlaces-1;i++)
{
var newspan = document.createElement("span")
targetdiv.append(newspan)
newspan.innerHTML = "__ "

}


document.getElementById('EnterGuess').onclick = function startinput(splitArtist) {
document.getElementById('EnterGuess').onkeyup = function(event) {
 var userinput = event.key;

 alert(userinput)


for(i=0; i<splitArtist.length; i++)

	{
	if(userinput===splitArtist[i])
	{
		var x = i
		blankarray.splice(x,1,(userinput))
		alert("found")
	}


}
}


}

}

randomword()
for(i=0;i<blankarray.length;i++)
{
	console.log(blankarray[i])
}



// function tha captures user key press once inside input box





function newletter(){
var targetdiv2 = document.getElementbyId("wordtobeGuessed");

for(j=0;j<blankarray.length;i++)

{
	var newspan = document.createElement("span")
	targetdiv2.append(newspan)
newspan.innerHTML = blankarray[j]
}
}





// function alphabetsplice(userinput){


 // var x = alphabet.indexOf(userinput)

 // alphabet.splice((x),1);
// }



// function guessespush(x)
// {

// correctGuesses.push(x)


// }





// document.onkeyup = function userpresskey(event){





 // var userinput = event.key;



// for(i=0;i<splitArtist.length;i++)

// {

	// if (userinput ===  splitArtist[i])
	// {
	   
	    // guessespush(userinput);
		  
	// }


// }




// if ((splitArtist).indexOf(userinput) == -1) { 

	// alphabetsplice(userinput)
	
// }



// for (i = 0; i<alphabet.length; i++) {
	// document.write(alphabet[i])
// }





// for (i=0; i<correctGuesses.length; i++)
	// {alert(correctGuesses[i])
	// }

// }








	
  