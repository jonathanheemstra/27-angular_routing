'use strict';

require('./lib/test-setup.js');
require('angular-mocks');
const angular = require('angular');

describe('GalleryController', function() {
  beforeEach( () => {
    angular.mock.module('routesApp');
    angular.mock.inject( $controller => {
      this.galleryCtrl = new $controller('GalleryController');
    });
  });

  describe('this.title property', () => {
    it('should have a title property that equals "welcome to the gallery"', () => {
      expect(this.galleryCtrl.title).toBe('welcome to the gallery');
    });
  });
});
