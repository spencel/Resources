'use strict';

/* Filters */

// Register the myFilters module as a dependency for the main myApp module.
angular.module('myFilters', []).filter('filterName', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});