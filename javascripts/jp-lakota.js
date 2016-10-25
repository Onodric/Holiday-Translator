"use strict";
var Translator = (function(callItself){
  var englishToLakota = {
    "happy": "iyúškin",
    "holidays": "waškate anpetu",
    "neighbors": "ikhíyela thí",
    "here": "lel",
    "is": "wa",
    "a": "wan",
    "seasonal": "wanichoka",
    "fruitcake": "umachis",
    "sorry": "šila",
    "about": "ún",
    "your": "ya",
    "dog": "šúnka",
  };

  callItself.getLakota = function(word){
    return englishToLakota[word];
  };
  callItself.setLakota = function(english, Lakota){
    englishToLakota[english] = lokota;
    return englishToLakota[english];
  };

  return callItself;
})(Translator);