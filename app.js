var app = angular.module("myApp", ["ngRoute","ngGrid"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/main/main.html"
    })
    .when("/red", {
        templateUrl : "red.htm"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});