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
		{src: "static/images/sunset2.jpg", thumbnail: "static/images/thumbnails/sunset2_thumb.jpg"},
		{src: "static/images/man1.jpg", thumbnail: "static/images/thumbnails/man1_thumb.jpg"},
		{src: "static/images/mountains1.jpg", thumbnail: "static/images/thumbnails/mountains1_thumb.jpg"},
		{src: "static/images/mountains2.jpg", thumbnail: "static/images/thumbnails/mountains2_thumb.jpg"},
		{src: "static/images/mountains3.jpg", thumbnail: "static/images/thumbnails/mountains3_thumb.jpg"},
		{src: "static/images/old_and_young1.jpg", thumbnail: "static/images/thumbnails/old_and_young1_thumb.jpg"},
		{src: "static/images/pathway1.jpg", thumbnail: "static/images/thumbnails/pathway1_thumb.jpg"},
		{src: "static/images/school_children1.jpg", thumbnail: "static/images/thumbnails/school_children1_thumb.jpg"},
		{src: "static/images/sea1.jpg", thumbnail: "static/images/thumbnails/sea1_thumb.jpg"},
		{src: "static/images/seat1.jpg", thumbnail: "static/images/thumbnails/seat1_thumb.jpg"},
		{src: "static/images/sunset1.jpg", thumbnail: "static/images/thumbnails/sunset1_thumb.jpg"},
		{src: "static/images/children1.jpg", thumbnail: "static/images/thumbnails/children1_thumb.jpg"}
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
		{src: "static/images/bag_pipes1.jpg", thumbnail: "static/images/thumbnails/bag_pipes1_thumb.jpg"},
		{src: "static/images/balloon1.jpg", thumbnail: "static/images/thumbnails/balloon1_thumb.jpg"},
		{src: "static/images/blossom1.jpg", thumbnail: "static/images/thumbnails/blossom1_thumb.jpg"},
		{src: "static/images/church1.jpg", thumbnail: "static/images/thumbnails/church1_thumb.jpg"},
		{src: "static/images/fountain1.jpg", thumbnail: "static/images/thumbnails/fountain1_thumb.jpg"},
		{src: "static/images/gardens1.jpg", thumbnail: "static/images/thumbnails/gardens1_thumb.jpg"},
		{src: "static/images/gardens2.jpg", thumbnail: "static/images/thumbnails/gardens2_thumb.jpg"},
		{src: "static/images/gardens3.jpg", thumbnail: "static/images/thumbnails/gardens3_thumb.jpg"},
		{src: "static/images/gardens4.jpg", thumbnail: "static/images/thumbnails/gardens4_thumb.jpg"},
		{src: "static/images/gardens6.jpg", thumbnail: "static/images/thumbnails/gardens6_thumb.jpg"},
		{src: "static/images/gardens7.jpg", thumbnail: "static/images/thumbnails/gardens7_thumb.jpg"},
		{src: "static/images/lake1.jpg", thumbnail: "static/images/thumbnails/lake1_thumb.jpg"}
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
		{src: "static/images/bird1.jpg", thumbnail: "static/images/thumbnails/bird1_thumb.jpg"},
		{src: "static/images/duck1.jpg", thumbnail: "static/images/thumbnails/duck1_thumb.jpg"},
		{src: "static/images/duck2.jpg", thumbnail: "static/images/thumbnails/duck2_thumb.jpg"},
		{src: "static/images/green_plant1.jpg", thumbnail: "static/images/thumbnails/green_plant1_thumb.jpg"},
		{src: "static/images/pink_flower1.jpg", thumbnail: "static/images/thumbnails/pink_flower1_thumb.jpg"},
		{src: "static/images/puppy1.jpg", thumbnail: "static/images/thumbnails/puppy1_thumb.jpg"},
		{src: "static/images/red_flower1.jpg", thumbnail: "static/images/thumbnails/red_flower1_thumb.jpg"},
		{src: "static/images/red_flower2.jpg", thumbnail: "static/images/thumbnails/red_flower2_thumb.jpg"},
		{src: "static/images/red_flower3.jpg", thumbnail: "static/images/thumbnails/red_flower3_thumb.jpg"},
		{src: "static/images/seagull1.jpg", thumbnail: "static/images/thumbnails/seagull1_thumb.jpg"},
		{src: "static/images/seal1.jpg", thumbnail: "static/images/thumbnails/seal1_thumb.jpg"},
		{src: "static/images/white_flower1.jpg", thumbnail: "static/images/thumbnails/white_flower1_thumb.jpg"}
	];

	this.selectImage = function(imageIndex) {
		this.currentImageIndex = imageIndex;
	};
	this.isSelected = function(imageIndex) {
		return this.currentImageIndex === imageIndex;
	};
});