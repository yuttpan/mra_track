var app = angular.module("myApp", ["ngRoute","angularUtils.directives.dirPagination"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/main/main.html"
    })
    .when("/eclaim_check", {
        templateUrl : "views/report/eclaim_check/main.html"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});