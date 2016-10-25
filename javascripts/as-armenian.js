"use strict";

var Translator = (function(callItself) {
	var englishToArmenian = {
	    "happy": "yerjanik",
	    "holidays": "toner",
	    "neighbor": "drats’i",
	    "here": "aystegh",
	    "is": "e",
	    "a": "a",
	    "seasonal": "sezonayin",
	    "fruitcake": "mirg tort",
	    "sorry": "neroghut’yun",
	    "about": "masin",
	    "your": "dzer",
	    "dog": "shun",
	    "cat": "katu",
	    "rodent": "krtsogh"
  	};

  	callItself.getArmenian = function (word) {
  		return englishToArmenian[word];
  	};

  	callItself.setArmenian = function(english, armenian) {
  		englishToArmenian[english] = armenian;
  		return englishToArmenian[english];
  	};

  	return callItself;
  })(Translator);
