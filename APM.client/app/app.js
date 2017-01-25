//(function(){
//    "use strict";
    var app=angular.module("productManagement",
    ["ngRoute"]);
    app.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "app/Home/home.html"
              
            })
            .when("/product", {
                templateUrl:"app/product/productListView.html",
    controller: "app/product/productListCtrl"
            })
            .otherwise({
                redirectTo: "/"
            });
    
});