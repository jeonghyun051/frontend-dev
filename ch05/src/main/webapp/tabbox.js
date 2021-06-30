var tabBox = {
	init: function() {
		console.log(1,this);
		window.addEventListener("load", this._onWindowLoad.bind(this));
	},
	_onWindowLoad: function() {
		var divTabBox = document.getElementsByClassName("tab-box")[0];
		var ul = divTabBox.childNodes[1];
		var liTabs = ul.getElementsByTagName("li");
		
		console.log(2,this);		
		for(var i = 0; i < liTabs.length; i++){
			liTabs[i].addEventListener("click", this._onTabClicked);
		}
	},
	_onTabClicked: function() {
		// unselected
		console.log(3,this);
		var lisSelected = document.getElementsByClassName("selected");
		(lisSelected.length == 1) && (lisSelected[0].className = "");
		
		// selected
		this.className = "selected";
	}	
}