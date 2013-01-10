requirejs.config({
	// define aliases for requiring modules
	paths : {
		'backbone'       : '/vendor/documentcloud/backbone-min',
		'jquery'         : '/vendor/jquery/jquery-1.8.3.min',
		'jquery-ui'      : '/vendor/jquery-ui/1.9.2/js/jquery-ui.min',
		'jquery/plugins' : '/vendor/jquery/plugins',
		'json'           : '/vendor/json/json',
		'public'         : '/js',
		'templates'      : '/templates',
		'text'           : '/vendor/require/plugins/text',
		'underscore'     : '/vendor/documentcloud/underscore-min'
	},
	shim  : {
		'backbone'   : {
			deps    : ['underscore', 'jquery'],
			exports : 'Backbone'
		},
		'jquery' : {
			exports : '$'
		},
		'jquery-ui' : {
			deps    : ['jquery'],
			exports : '$'
		},
		'json' : {
			exports : 'JSON'
		},
		'underscore' : {
			exports : '_'
		}
	}
});

requirejs(
[
	'jquery',
	'json',
	'jquery-ui'
],
function($, JSON) {
	var path = $('#requirejs-script').data('script');

	requirejs([ path ], function(Module) {
		var module = new Module();
		module.initialize();
	});
});