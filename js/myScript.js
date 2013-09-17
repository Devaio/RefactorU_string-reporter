var word = prompt("Give me a word, any word!", "Enter word here:");
if(word.length > 0) {
	alert("The word you entered was " + word + ".  This word is " + word.length + " characters long and the third character in it is " + word[2] + ".  In all lowercase, your word looks like this: " + word.toLowerCase() + ".  In all uppercase: " + word.toUpperCase() + ".  This is a sentence using " + word + "!  Words are made up of pieces like this: " + word.substring(1, 4) + ".");
}