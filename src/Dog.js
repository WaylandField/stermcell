define(function(){
    var Dog = function(){
        this.name="dog";
    };

    Dog.prototype.bite = function(){
        this.bited = true;
        alert(this.bited);
    };
    return new Dog;
});