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

	function Resume() {};

	_.extend(Resume.prototype, {

		//////////////////////////////////////////////////////////////////////
		// Public methods ///////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////////

		initialize : function() {
			var editorView  = new ResumeView({
					el : $('#resume')
				});

			this._loadResume();
		},

		//////////////////////////////////////////////////////////////////////
		// Psuedo-private methods ///////////////////////////////////////////
		////////////////////////////////////////////////////////////////////

		_loadResume : function() {

			var self     = this,
				resumeId = $('#resumeId').text();

			this._resume   = new ResumeModel({
				id : resumeId
			});

			this._resume.fetch({
				success : function(model, response) {
					if (response) {
						EventDispatcher.trigger('resume:load:done', self._resume);
					} else {
						EventDispatcher.trigger('resume:load:error');
					}
				},

				error : function(model, response) {
					EventDispatcher.trigger('resume:load:error');
				}
			});
		}

	});

	return Resume;
});