
var artists = ["bannna","apple"]     

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var correctGuesses = []

var guessesRemaining=0

function alphabetsplice(userinput){


 var x = alphabet.indexOf(userinput)

 alphabet.splice((x),1);
}



function guessespush(x)
{

correctGuesses.push(x)


}

while(guessesRemaining != 3)
{


}

document.onkeyup = function userpresskey(event){





 var userinput = event.key;


var currentArtist = artists[Math.floor(Math.random()*artists.length)];

alert(currentArtist)

var splitArtist = currentArtist.split('');

alert(splitArtist)



for(i=0;i<splitArtist.length;i++)

{

	if (userinput ===  splitArtist[i])
	{
	   var x = userinput
	    guessespush(x);
		
	}


}

alert(correctGuesses[0])



if ((splitArtist).indexOf(userinput) == -1) { 

	alphabetsplice(userinput)
	
}



for (i = 0; i<alphabet.length; i++) {
	document.write(alphabet[i])
}





for (i=0; i<guesses.legnth; i++)
	{alert(guesses[i])
	}

}

var winsText = document.getElementById('wins')
          winsText.textContent = 

