$(function(){
	Notes.Note = Backbone.Model.extend({
		defaults: {
			text: "",
			title: "",
			timeCreated: new Date().getTime()
		}
	});

	Notes.NoteCollection = Backbone.Collection.extend({
		model: Notes.Note
	});

	Notes.EditNoteView = Backbone.Marionette.ItemView.extend({
	});

	Notes.ListNoteView = Backbone.Marionette.ItemView.extend({
	});

	Notes.NoteCollectionView = Backbone.Marionette.CollectionView.extend({
	});
});
