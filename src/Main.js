define(['./Navigation'], function(naviApi){
    var Main = function(){};
    Main.prototype.init = function(){
        
        var naviListModel = naviApi.getNaviListModel([
            {label:'home'},
            {label:'data structure'},
            {label:'javascript'},
            {label:'cloud computing'},
            {label:'no-sql'}            
        ]);
//        for(var i=0;i<5;i++){
//            naviListModel.add(naviApi.getNaviModel({label:'label'+i}));
//        }
        var navigationList = naviApi.getNavigationList({
            collection : naviListModel
        });
        var ele = navigationList.render().el;
        $("#container").append(ele);
    };
    return new Main;
});

//define(['./Layout'], function(layout){
//    var Main = function(){};
//    Main.prototype.init = function(){
//       layout.render();
//       $("#container").html(layout.render().el);
//    };
//    return new Main;
//});