var app = angular.module('sue-philbin-photoart', ['ngAnimate']);

app.controller("GalleryController", function(){
	this.currentInfo = 'aboutSue';

	this.selectGallery = function(setGallery) {
		this.currentGallery = setGallery;
	};
	this.isSelected = function(galleryName) {
		return this.currentGallery === galleryName;
	};
});

app.controller("ImageController", function(){
	this.currentImage = 1;

	this.numImagePairs = {
		1: "static/images/duck1.jpg",
		2: "static/images/duck1.jpg",
		3: "static/images/duck1.jpg",
		4: "static/images/duck1.jpg",
		5: "static/images/duck1.jpg",
		6: "static/images/duck1.jpg",
		7: "static/images/duck1.jpg",
		8: "static/images/duck1.jpg",
		9: "static/images/duck1.jpg",
		10: "static/images/duck1.jpg",
		11: "static/images/duck1.jpg",
		12: "static/images/duck1.jpg",
	};

	this.selectImage = function(setImage) {
		this.currentImage = setImage;
	};
	this.isSelected = function(imageNum) {
		return this.currentImage === imageNum;
	};
});