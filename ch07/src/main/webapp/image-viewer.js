
var imageViewer = {
	init: function() {
		console.log("init:" + this);	// object
		var _this = this;
		$(function() {
			console.log("dom loaded:" + this);	// HTMLDocument
			$("#btn-change").click(_this._changeImage.bind(_this));	// 여기서 bind를 해주면 changeImage 함수 this가 imageViewer object로 바뀜
			$("#btn-slideshow").click(_this._slideImage.bind(_this));
		});
	},
	_changeImage: function() {	// 이벤트 함수이기 때문에 여기서 this는 buttin
		console.log("이벤트:" + this)	// HTMLButtonElements
		// 랜덤 변수(0,1,2,3,4)
		var result = Math.floor(Math.random() * this._images.length);
		var data = this._images[result];
		$("#image").attr("src", "images/" + data.split(":", 2)[1]);
	},
	_slideImage: function() {
		if (this.slide) {
			clearTimeout(this.slide);
			this.slide = null;
			$("#btn-slideshow").text("슬라이드쇼 시작");
		} else {
			this._images.forEach((image, index) => {
				this.slide = setTimeout(() => {
					this._changeImage();
/*					$("#image").attr("src", "images/" + image.split(":", 2)[1]);*/
				},2000 * index);
				}
			)
			console.log("this.slide:" + this.slide);
			$("#btn-slideshow").text("슬라이드쇼 중지");
		}
	},
	slide: false,
	_images: [
		"국화:Chrysanthemum.jpg",
		"사막:Desert.jpg",
		"수국:Hydrangeas.jpg",
		"해파리:Jellyfish.jpg",
		"코알라:Koala.jpg",
		"등대:Lighthouse.jpg",
		"펭귄:Penguins.jpg",
		"툴립:Tulips.jpg"
	]
}