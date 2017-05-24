
var artists = ["yokoo","leeburrige","tiesto","bjkjjk","kjghkjgkhj","jgfjgj"]

var guess = 0

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


function alphabetsplice(userinput){



 var x = 0
 alphabet.indexOf(userinput)

 alphabet.splice((x),1);
}



document.onkeyup = function userpresskey(event){





 var userinput = event.key;
var userguessArray = [];


var currentArtist = artists[Math.floor(Math.random()*artists.length)];

alert(currentArtist)

var splitArtist = currentArtist.split('');

alert(splitArtist)



for(i=0;i<splitArtist.length;i++)

{

	if (userinput ===  splitArtist[i])
	{

		splitArtist.indexOf(userinput)
		userguessArray.push(userinput)
	}
}
	
	alphabetsplice()

alert(userguessArray[0])

for (i = 0; i<alphabet.length; i++) {
	document.write(alphabet[i])
}
}

