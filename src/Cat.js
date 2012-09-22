define(["./Animal", "./Dog"], function(animal, dog){
    return {
        name:"",
        fight: function(){
            animal.getBirth();
            dog.bite();
        }
    };
});