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
    }
});

// Start the main app logic.
//require(['src/Animal', 'src/Dog'],
//function   ( ){
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
//    var ani = new Animal();
//    var dog = new Dog();
//    ani.getBirth();
//    dog.bite();
//});


require(['src/Cat'], function(cat){
    alert("asdfasdf");
    cat.fight();
});