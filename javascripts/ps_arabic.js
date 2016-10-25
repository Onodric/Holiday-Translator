"use strict";
var Translator = (function(callItself) {
  var englishToArabic = {
    "happy": "سعيد",
    "holidays": "عيد",
    "neighbor": "يا جاري",
    "here": "يكون",
    "is": "",
    "a": "",
    "seasonal": "موسمي",
    "fruitcake": "كاك الفواكي",
    "sorry": "يسف",
    "about": "لل",
    "your": "",
    "dog": "كلبك",
    "cat": "قطة",
    "rodent": "قارض"
  };

 callItself.getArabic = function(word){
    return englishToArabic[word];
  };
  callItself.setArabic = function(english, arabic){
    englishToArabic[english] = arabic;
    return englishToArabic[english];
  };

  return callItself;
})(Translator);

