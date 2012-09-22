define(['js/backbone'],function(){
    
    var NavigationModel = Backbone.Model.extend({
        defaults : {
            'label' :"navi",
            'className' : 'active',
            'type' : 'plain'
        }
    });

    var NavigationListModel = Backbone.Collection.extend({
        model: NavigationModel
    });
    
    var Navigation = Backbone.View.extend({
        tagName : "li",
        render : function(){
            var h = [];
            h.push("<a href='#'>",this.model.get("label"),"</a>");
            $(this.el).html(h.join(""));
            return this;
        }
    });

    var NavigationList = Backbone.View.extend({
        tagName : "ul",
        className :"nav nav-pills",
        render : function(){
            var that = this;
            this.collection.each(function(navi){
                $(that.el).append(new Navigation({model:navi}).render().el);
            });
            return this;
        }
    });

    return {
        getNaviModel : function(attr){return new NavigationModel(attr);},
        getNaviListModel : function(list){return new NavigationListModel(list);},
        getNavigation : function(attr){return new Navigation(attr);},
        getNavigationList : function(attr){return new NavigationList(attr);}
    };
});