'use strict';

require.config({
	paths: {
		jquery: '../bower_components/jquery/dist/jquery',
		backbone: '../bower_components/backbone/backbone',
		underscore: '../bower_components/underscore/underscore',
		text: '../bower_components/requirejs-text/text',
		mustache: '../bower_components/mustache/mustache',
		stache: '../bower_components/requirejs-mustache/stache',
		transit: '../bower_components/jquery.transit/jquery.transit'
	},
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['underscore','jquery'],
			exports: 'Backbone'
		},
		transit: {
      		deps: ['jquery'],
      		exports: 'jQuery.fn.transition'
    	}
	}
});

require([
		'jquery', 
		'backbone',
		'underscore', 
		],
function($,backbone,_) {

});