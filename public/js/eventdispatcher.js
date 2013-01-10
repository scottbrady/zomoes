define(
[
    'underscore',
    'backbone'
],
function(
    _,
    Backbone
) {

    var EventDispatcher = {};

    _.extend(EventDispatcher, Backbone.Events);

    return EventDispatcher;
});