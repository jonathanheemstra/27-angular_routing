'use strict';

require('./lib/test-setup.js');

const angular = require('angular');

describe('HomeController', function() {
  beforeEach( () => {
    angular.mock.module('routesApp');
    angular.mock.inject( $controller => {
      this.homeCtrl = new $controller('HomeController');
    });
  });

  describe('this.title property', () => {
    it('should have a title property that equals "welcome to the homepage"', () => {
      expect(this.homeCtrl.title).toBe('welcome to the homepage');
    });
  });
});
