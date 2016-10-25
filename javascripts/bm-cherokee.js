"use strict";
var Translator = (function(callItself){
  var englishToCherokee = {
    "happy": "a-li-he-li-s-di",
    "holidays": "tsu-ni-lv-wi-s-da-ne-di-ni-ge-sv-na-i-ga",
    "neighbor": "na-v-i-tsu-na-da-li",
    "here": "a-ha-ni",
    "is": "",
    "a": "",
    "seasonal": "a-ye-li-go-la",
    "fruitcake": "tsu-ga-na-s-ti",
    "sorry": "u-yo-a-ye-lv-di",
    "about": "gv-wa-du-wi-dv",
    "your": "ni-hi",
    "dog": "gi-tli",
    "cat": "we-sa",
    "rodent": "tsi-s-de-tsi"
  };

  callItself.getCherokee = function(word){
    return englishToCherokee[word];
  };
  callItself.setCherokee = function(english, cherokee){
    englishToCherokee[english] = cherokee;
    return englishToCherokee[english];
  };
  return callItself;
})(Translator);
