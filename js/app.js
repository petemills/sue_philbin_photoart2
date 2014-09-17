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
		{src: "images/sunset2.jpg", thumbnail: "images/thumbnails/sunset2_thumb.jpg"},
		{src: "images/man1.jpg", thumbnail: "images/thumbnails/man1_thumb.jpg"},
		{src: "images/mountains1.jpg", thumbnail: "images/thumbnails/mountains1_thumb.jpg"},
		{src: "images/mountains2.jpg", thumbnail: "images/thumbnails/mountains2_thumb.jpg"},
		{src: "images/mountains3.jpg", thumbnail: "images/thumbnails/mountains3_thumb.jpg"},
		{src: "images/old_and_young1.jpg", thumbnail: "images/thumbnails/old_and_young1_thumb.jpg"},
		{src: "images/pathway1.jpg", thumbnail: "images/thumbnails/pathway1_thumb.jpg"},
		{src: "images/school_children1.jpg", thumbnail: "images/thumbnails/school_children1_thumb.jpg"},
		{src: "images/sea1.jpg", thumbnail: "images/thumbnails/sea1_thumb.jpg"},
		{src: "images/seat1.jpg", thumbnail: "images/thumbnails/seat1_thumb.jpg"},
		{src: "images/sunset1.jpg", thumbnail: "images/thumbnails/sunset1_thumb.jpg"},
		{src: "images/children1.jpg", thumbnail: "images/thumbnails/children1_thumb.jpg"}
	];

	this.selectImage = function(imageIndex) {
		this.currentImageIndex = imageIndex;
	};
	this.isSelected = function(imageIndex) {
		return this.currentImageIndex === imageIndex;
	};
});

app.controller("BooksImageController", function(){
	this.currentImageIndex = 0;

	this.images = [
		{src: "images/bag_pipes1.jpg", thumbnail: "images/thumbnails/bag_pipes1_thumb.jpg"},
		{src: "images/balloon1.jpg", thumbnail: "images/thumbnails/balloon1_thumb.jpg"},
		{src: "images/blossom1.jpg", thumbnail: "images/thumbnails/blossom1_thumb.jpg"},
		{src: "images/church1.jpg", thumbnail: "images/thumbnails/church1_thumb.jpg"},
		{src: "images/fountain1.jpg", thumbnail: "images/thumbnails/fountain1_thumb.jpg"},
		{src: "images/gardens1.jpg", thumbnail: "images/thumbnails/gardens1_thumb.jpg"},
		{src: "images/gardens2.jpg", thumbnail: "images/thumbnails/gardens2_thumb.jpg"},
		{src: "images/gardens3.jpg", thumbnail: "images/thumbnails/gardens3_thumb.jpg"},
		{src: "images/gardens4.jpg", thumbnail: "images/thumbnails/gardens4_thumb.jpg"},
		{src: "images/gardens6.jpg", thumbnail: "images/thumbnails/gardens6_thumb.jpg"},
		{src: "images/gardens7.jpg", thumbnail: "images/thumbnails/gardens7_thumb.jpg"},
		{src: "images/lake1.jpg", thumbnail: "images/thumbnails/lake1_thumb.jpg"}
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
		{src: "images/bird1.jpg", thumbnail: "images/thumbnails/bird1_thumb.jpg"},
		{src: "images/duck1.jpg", thumbnail: "images/thumbnails/duck1_thumb.jpg"},
		{src: "images/duck2.jpg", thumbnail: "images/thumbnails/duck2_thumb.jpg"},
		{src: "images/green_plant1.jpg", thumbnail: "images/thumbnails/green_plant1_thumb.jpg"},
		{src: "images/pink_flower1.jpg", thumbnail: "images/thumbnails/pink_flower1_thumb.jpg"},
		{src: "images/puppy1.jpg", thumbnail: "images/thumbnails/puppy1_thumb.jpg"},
		{src: "images/red_flower1.jpg", thumbnail: "images/thumbnails/red_flower1_thumb.jpg"},
		{src: "images/red_flower2.jpg", thumbnail: "images/thumbnails/red_flower2_thumb.jpg"},
		{src: "images/red_flower3.jpg", thumbnail: "images/thumbnails/red_flower3_thumb.jpg"},
		{src: "images/seagull1.jpg", thumbnail: "images/thumbnails/seagull1_thumb.jpg"},
		{src: "images/seal1.jpg", thumbnail: "images/thumbnails/seal1_thumb.jpg"},
		{src: "images/white_flower1.jpg", thumbnail: "images/thumbnails/white_flower1_thumb.jpg"}
	];

	this.selectImage = function(imageIndex) {
		this.currentImageIndex = imageIndex;
	};
	this.isSelected = function(imageIndex) {
		return this.currentImageIndex === imageIndex;
	};
});