var synth = window.speechSynthesis;
var speakButton = document.getElementById('speakButton');
var nounButton = document.getElementById('nounButton');
var verbButton = document.getElementById('verbButton');
var adjectiveButton = document.getElementById('adjectiveButton');
var nounButton2 = document.getElementById('nounButton2');
var placeButton = document.getElementById('placeButton');

var nouns = ['the Turkey', 'mom', 'dad', 'the dog', 'my teacher', 'the elephant', 'the cat'];
var verbs = ['sat on', 'ate', 'danced with', 'saw', 'does not like', 'kissed'];
var adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
var nouns2 = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
var places = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];

function speakNow(string) {
    var utterThis = new SpeechSynthesisUtterance(string);
    synth.speak(utterThis);
}

function getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

speakButton.addEventListener('click', function() {
    var textToSpeak = '';
    textToSpeak += getRandomWord(nouns) + ' ';
    textToSpeak += getRandomWord(verbs) + ' ';
    textToSpeak += getRandomWord(adjectives) + ' ';
    textToSpeak += getRandomWord(nouns2) + ' ';
    textToSpeak += getRandomWord(places) + '.';
    speakNow(textToSpeak);
});

nounButton.addEventListener('click', function() {
    var word = getRandomWord(nouns);
    speakNow(word);
});

verbButton.addEventListener('click', function() {
    var word = getRandomWord(verbs);
    speakNow(word);
});

adjectiveButton.addEventListener('click', function() {
    var word = getRandomWord(adjectives);
    speakNow(word);
});

nounButton2.addEventListener('click', function() {
    var word = getRandomWord(nouns2);
    speakNow(word);
});

placeButton.addEventListener('click', function() {
    var word = getRandomWord(places);
    speakNow(word);
});
