'use strict';

require('./lib/test-setup.js');
const angular = require('angular');

describe('SignupController', function() {
  beforeEach( () => {
    angular.mock.module('routesApp');
    angular.mock.inject( $controller => {
      this.signupCtrl = new $controller('SignupController');
    });
  });

  describe('this.title property', () => {
    it('should have a title property that equals "welcome to the signup page"', () => {
      expect(this.signupCtrl.title).toBe('welcome to the signup page');
    });
  });
});
