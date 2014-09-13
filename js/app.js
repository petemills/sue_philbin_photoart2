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

	this.selectImage = function(setImage) {
		this.currentImage = setImage;
	};
	this.isSelected = function(imageNum) {
		return this.currentImage === imageNum;
	};
});