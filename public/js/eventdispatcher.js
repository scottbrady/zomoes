define(
[
	'underscore',
	'backbone'
],
function(
	_,
	Backbone
) {

	/**
	 * Object to route events through the frontend application.
	 **/
	var EventDispatcher = {};

	_.extend(EventDispatcher, Backbone.Events);

	return EventDispatcher;
});