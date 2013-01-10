define(
[
	'jquery',
	'underscore',
	'public/eventdispatcher',
	'public/views/resume',
	'public/models/resume'
],
function(
	$,
	_,
	EventDispatcher,
	ResumeView,
	ResumeModel
) {

	/**
	 * Object to bootstrap the resume page.
	 **/
	function Resume() {};

	_.extend(Resume.prototype, {

		//////////////////////////////////////////////////////////////////////
		// Public methods ///////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////////

		/**
		 * Initialization method.
		 **/
		initialize : function() {
			var editorView  = new ResumeView({
					el : $('#resume')
				});

			this._loadResume();
		},

		//////////////////////////////////////////////////////////////////////
		// Psuedo-private methods ///////////////////////////////////////////
		////////////////////////////////////////////////////////////////////

		/**
		 * Load a specific resume.
		 **/
		_loadResume : function() {

			var self     = this,
				resumeId = $('#resumeId').text(); // get the resume ID

			// get a new resume object
			this._resume   = new ResumeModel({
				id : resumeId
			});

			// load the resume data
			this._resume.fetch({
				/**
				 * Run when the resume was loaded successfully.
				 **/
				success : function(model, response) {
					if (response) {
						EventDispatcher.trigger('resume:load:done', self._resume);
					} else {
						EventDispatcher.trigger('resume:load:error');
					}
				},

				/**
				 * Run when there's an error loading the resume.
				 **/
				error : function(model, response) {
					EventDispatcher.trigger('resume:load:error');
				}
			});
		}

	});

	return Resume;
});