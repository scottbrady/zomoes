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
	/**
	 * Object that handles the resume view.
	 **/
	var ResumeView = Backbone.View.extend({

		//////////////////////////////////////////////////////////////////////
		// Public methods ///////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////////

		/**
		 * Initialization method.
		 **/
		initialize : function(options) {
			this._resumeTemplate = _.template(ResumeTemplate);
			this._resume         = options.resume;
			this._registerEvents();
		},

		/**
		 * Render the resume.
		 **/
		render : function(resume) {
			var self = this,
				html = this._resumeTemplate(resume.toJSON());

			$(this.el).html(html);

			$(this.el).click(_.bind(this._notARickRoll, this));
		},

		/**
		 * Render an error.
		 **/
		renderError : function() {
			$(this.el).html(
				'Oops, there was a problem loading the resume.'
			);
		},

		//////////////////////////////////////////////////////////////////////
		// Psuedo-private methods ///////////////////////////////////////////
		////////////////////////////////////////////////////////////////////

		/**
		 * Register events.
		 **/
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

		/**
		 * This is not the method you are looking for.
		 **/
		_notARickRoll : function() {
			window.location = 'http://youtu.be/dQw4w9WgXcQ?t=43s';
		}
	});

	return ResumeView;
});