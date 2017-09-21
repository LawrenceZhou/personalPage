'use strict';

cs142App.controller('UserListController', ['$scope', '$resource', '$rootScope', '$location', '$route',
    function ($scope, $resource, $rootScope, $location, $route) {
        $scope.selectedIndex = 0;
         $scope.Entrances = [
            {name: "About"},
            {name: "Portfolio"},
            {name: "Bio"},
            {name: "Tour"},
        ];

        $scope.viewSelected = function(index) {
            if(index === 0) {
                $location.path("/About");
                $scope.selectedIndex = index;
            }else if(index === 1) {
                $location.path("/Portfolio");
                $scope.selectedIndex = index;
            }else if(index === 2) {
                $location.path("/Bio");
              
                $scope.selectedIndex = index;
            }else {
                $location.path("/Tour");
                $scope.selectedIndex = index;
            }
        };

        $scope.viewAbout = function(index) {
        	$location.path("/About");
            $scope.selectedIndex = index;
        };

        $scope.viewPortfolio = function(index) {
            $location.path("/Portfolio");
            $scope.selectedIndex = index;
        };

        $scope.viewBio = function(index) {
            $location.path("/Bio");
            $scope.selectedIndex = index;
        };

        $rootScope.$watch(function () {return $location.path()}, function (newLocation, oldLocation) {
            if($location.path() === "/About") {
             $scope.selectedIndex = 0;
        }
        else if($location.path() === "/Bio") {
             $scope.selectedIndex = 2;
        } 
        else {
             $scope.selectedIndex = 1;
         }
    });




        var init = function () {
        // check if there is query in url
        // and fire search in case its value is not empty

        if($location.path() === "/About") {
             $scope.selectedIndex = 0;
        }
        else if($location.path() === "/Bio") {

 
             $scope.selectedIndex = 2;
        }
         else{
             $scope.selectedIndex = 1;
         }

};
// and fire it after definition
init();
    }]);


