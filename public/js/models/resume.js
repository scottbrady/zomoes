define(
[
	'backbone'
],
function(
	Backbone
) {
	/**
	 * Object that respresents a single resume.
	 **/
	var ResumeModel = Backbone.Model.extend({

		urlRoot : '/api/resume'

	});

	return ResumeModel;
});