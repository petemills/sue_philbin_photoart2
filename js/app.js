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
	this.currentImageIndex = 0;

	// The numbers will match up between images and thumbnails eventually
	// i.e 1: "static/images/cow1.jpg",
	// 	   1: "static/images/thumbnails/cow1_thumb.jpg",
	this.images = [
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/mountains1_thumb.jpg"},
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/mountains1_thumb.jpg"},
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/mountains1_thumb.jpg"},
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/mountains1_thumb.jpg"},
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/mountains1_thumb.jpg"},
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/mountains1_thumb.jpg"},
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/mountains1_thumb.jpg"},
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/mountains1_thumb.jpg"},
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/mountains1_thumb.jpg"},
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/mountains1_thumb.jpg"},
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/mountains1_thumb.jpg"},
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/mountains1_thumb.jpg"}
	];

	this.selectImage = function(imageIndex) {
		this.currentImageIndex = imageIndex;
	};
	this.isSelected = function(imageIndex) {
		return this.currentImageIndex === imageIndex;
	};
});