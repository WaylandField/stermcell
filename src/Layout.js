define(['js/backbone'], function(){
    var LayoutModel = Backbone.Model.extend({
        defaults : {
            
        }
    });
    var Layout = Backbone.View.extend({

        render : function(){
            $(this.el).html("view");
            return this;
        }
    });
    return new Layout;
});