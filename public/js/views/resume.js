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

			$(this.el).click(_.bind(this._notARickRoll, this));
		},

		renderError : function() {
			$(this.el).html(
				'Oops, there was a problem loading the resume.'
			);
		},

		//////////////////////////////////////////////////////////////////////
		// Psuedo-private methods ///////////////////////////////////////////
		////////////////////////////////////////////////////////////////////

		_registerEvents : function() {
			EventDispatcher.on(
				'resume:load:done',
				_.bind(this.render, this)
			);

			EventDispatcher.on(
				'resume:load:error',
				_.bind(this.renderError, this)
			);
		},

		_notARickRoll : function() {
			window.location = 'http://youtu.be/dQw4w9WgXcQ?t=43s';
		}
	});

	return ResumeView;
});