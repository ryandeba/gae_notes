$(function(){
	Notes = new Backbone.Marionette.Application();

	Notes.addRegions({
		"main": "#main"
	});

	Notes.on("initialize:after", function(){
	});
});
