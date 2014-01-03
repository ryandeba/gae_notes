$(function(){
	Notes = new Backbone.Marionette.Application();

	Notes.addRegions({
		"main": "#main"
	});

	var notes;

	Notes.on("initialize:after", function(){
	 notes = new Notes.NoteCollection();
	});
});
