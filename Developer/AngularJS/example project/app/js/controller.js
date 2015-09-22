'use strict';

/* Controllers */

var myApp = angular.module('myApp', []);

myApp.controller('myCtrl1', function($scope) {
  $scope.data = [
  	{'name':'Item 1'
  	 'snippet':'Some information about item 1'},
  	{'name':'Item 2'
  	 'snippet':'Some information about item 2'},
  	{'name':'etc.'
  	 'snippet':'etc.'},
  ];
});
