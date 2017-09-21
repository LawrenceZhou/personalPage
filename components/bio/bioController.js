'use strict';

cs142App.controller('bioController', ['$scope', '$routeParams', '$resource', '$location', '$rootScope', '$http', '$mdDialog', '$anchorScroll',
  function($scope, $routeParams, $resource, $location, $rootScope, $http, $mdDialog, $anchorScroll) {
    /*
     * Since the route is specified as '/photos/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */
         var init = function () {
        // check if there is query in url
        // and fire search in case its value is not empty
        //alert(location.path());
        $location.hash('top');
        $anchorScroll();
};
// and fire it after definition
init();

  }]);
