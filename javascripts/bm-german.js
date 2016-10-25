"use strict";
var Translator = (function(callItself){
  var englishToGerman = {
    "happy": "glücklich",
    "holidays": "ferien",
    "neighbor": "nachbar",
    "here": "heir",
    "is": "ist",
    "a": "einen",
    "seasonal": "saisonal",
    "fruitcake": "fruchtkuchen",
    "sorry": "es tut uns leid",
    "about": "etwa",
    "your": "ihre",
    "dog": "hund",
    "cat": "katze",
    "rodent": "hamster"
  };

  callItself.getGerman = function(word){
    return englishToGerman[word];
  };
  callItself.setGerman = function(english, german){
    englishToGerman[english] = german;
    return englishToGerman[english];
  };

  return callItself;
})(Translator);
