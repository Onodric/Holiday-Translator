"use strict";
var inputTextDOM = document.getElementById("input");
var language = document.getElementById("styleSelect");
var userText = [];
var outputDOM = document.getElementById("output");

// attach event listeners

var translateLanguage = '';

language.addEventListener("change", function(){
// choose translator with selector
  translateLanguage = event.target.value;
  outputDOM.innerHTML = 'Output';
});

document.getElementById("button").addEventListener("click", function(){
  // button(event == DO!)
// use array.split to make an array of textarea
  userText = inputTextDOM.value.toLowerCase().split(" ");
  Translator.translate(userText, translateLanguage);
  outputDOM.innerHTML = Translator.getTranslatedPhrase().join(" ");
});

