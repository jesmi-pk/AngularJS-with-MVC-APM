(function(app) {
    'use strict';
    angular
       .module("productManagement")
       .controller("sidebar",
    sidebar);
 
    //app.directive('sideBar', sideBar);
 
    function sidebar() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/app/layout/sidebar.html'

        }
    }
    
    })