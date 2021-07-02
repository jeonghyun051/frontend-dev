// 간단 jquery 만들어 보기
var jQuey = function(param) {
	if(typeof(param) === 'function'){
		window.addEventListener("load",param);
		return;
	}
	
	if(typeof(param) === 'string'){
		// var elements = document.querySelectorAll(selector);
		// return new _jQuery(elements);
		return null;	
	}
}

var $ = jQuery;