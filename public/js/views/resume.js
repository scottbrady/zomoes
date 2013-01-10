define(
[
	'underscore',
	'backbone',
	'text!templates/resume.html',
	'public/eventdispatcher'
],
function(
	_,
	Backbone,
	ResumeTemplate,
	EventDispatcher
) {
	var ResumeView = Backbone.View.extend({

		//////////////////////////////////////////////////////////////////////
		// Public methods ///////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////////

		initialize : function(options) {
			this._resumeTemplate = _.template(ResumeTemplate);
			this._resume         = options.resume;
			this._registerEvents();
		},

		render : function(resume) {
			var self = this,
				html = this._resumeTemplate(resume.toJSON());

			$(this.el).html(html);
		},

		//////////////////////////////////////////////////////////////////////
		// Psuedo-private methods ///////////////////////////////////////////
		////////////////////////////////////////////////////////////////////

		_registerEvents : function() {
			EventDispatcher.on(
				'resume:load:done',
				_.bind(this.render, this)
			);
		}
	});

	return ResumeView;
});