
var artists = ["Yokoo","Sabo"]     

var attempts = 0

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var correctGuesses = []


function randomword(){
var currentArtist = artists[Math.floor(Math.random()*artists.length)];


var splitArtist = currentArtist.split('');


 var letterPlaces =currentArtist.length 
alert(letterPlaces)




var targetdiv = document.getElementById("wordtobeGuessed");
targetdiv.innerHTML = "__ "

for(i=0; i<letterPlaces-1;i++)
{
var newspan = document.createElement("span")
targetdiv.append(newspan)
newspan.innerHTML = "__ "
}
// }


}


randomword()



document.getElementById('EnterGuess').onclick = function() {
document.getElementById('EnterGuess').onkeyup = function(event)
{
 var userinput = event.key;

 alert(userinput)
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








	
  