require.config({
    //By default load any module IDs from js/lib
    baseUrl: 'lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        src: '../src'
    },
    shim : {
        'js/backbone': {
            deps:['js/underscore', 'js/json2', 'js/bootstrap'],
            exports : 'Backbone'
        }
    }
});

// Start the main app logic.
require(['js/jquery','js/backbone' ,'src/Main'],
function($, backbone, main){
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
    main.init();
});


