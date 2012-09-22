define(function(){
    var Animal = function (){
        this.name="";
        this.birth=new Date();
    };

    Animal.prototype.getBirth = function(){
        this.birth = new Date();
        alert(this.birth);
        return this.birth;
    };
    return new Animal;
});