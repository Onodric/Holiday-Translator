"use strict";
var Translator = (function(){
  var translatedPhrase = [];

  return {
    "getTranslatedPhrase": function(){
      return translatedPhrase;
    },
    "translate": function(phraseArray, language){
      translatedPhrase = [];
      phraseArray.forEach(function(englishWord){
      switch(language){
        case 'arabic':
          // translate(arabic)
          var newWord = Translator.getArabic(englishWord);
          translatedPhrase.push(newWord);
          break;
        case 'armenian':
          var newWord = Translator.getArmenian(englishWord);
          translatedPhrase.push(newWord);
          break;
        case 'lakota':
          var newWord = Translator.getLakota(englishWord);
          translatedPhrase.push(newWord);
          break;
        case 'german':
          var newWord = Translator.getGerman(englishWord);
          translatedPhrase.push(newWord);
          break;
        case 'cherokee':
          var newWord = Translator.getCherokee(englishWord);
          translatedPhrase.push(newWord);
          break;
      };
      });
    }
  };
})();


// loop through array
  // getWords for the language
  // returns go into new array
  // array.join(" ") to build new string