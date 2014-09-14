var app = angular.module('sue-philbin-photoart', ['ngAnimate']);

app.controller("GalleryController", function(){
	this.currentGallery = "vista";

	this.selectGallery = function(setGallery) {
		this.currentGallery = setGallery;
	};
	this.isSelected = function(galleryName) {
		return this.currentGallery === galleryName;
	};
});

app.controller("VistaImageController", function(){
	this.currentImageIndex = 0;

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

app.controller("PeopleImageController", function(){
	this.currentImageIndex = 0;

	this.images = [
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/red_flower1_thumb.jpg"},
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/red_flower1_thumb.jpg"},
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/red_flower1_thumb.jpg"},
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/red_flower1_thumb.jpg"},
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/red_flower1_thumb.jpg"},
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/red_flower1_thumb.jpg"},
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/red_flower1_thumb.jpg"},
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/red_flower1_thumb.jpg"},
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/red_flower1_thumb.jpg"},
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/red_flower1_thumb.jpg"},
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/red_flower1_thumb.jpg"},
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/red_flower1_thumb.jpg"}
	];

	this.selectImage = function(imageIndex) {
		this.currentImageIndex = imageIndex;
	};
	this.isSelected = function(imageIndex) {
		return this.currentImageIndex === imageIndex;
	};
});

app.controller("MacroImageController", function(){
	this.currentImageIndex = 0;

	this.images = [
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/bird1_thumb.jpg"},
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/bird1_thumb.jpg"},
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/bird1_thumb.jpg"},
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/bird1_thumb.jpg"},
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/bird1_thumb.jpg"},
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/bird1_thumb.jpg"},
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/bird1_thumb.jpg"},
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/bird1_thumb.jpg"},
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/bird1_thumb.jpg"},
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/bird1_thumb.jpg"},
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/bird1_thumb.jpg"},
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/bird1_thumb.jpg"}
	];

	this.selectImage = function(imageIndex) {
		this.currentImageIndex = imageIndex;
	};
	this.isSelected = function(imageIndex) {
		return this.currentImageIndex === imageIndex;
	};
});