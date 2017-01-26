'use strict';

require('./lib/test-setup.js');

const angular = require('angular');

describe('GalleryController', function() {
  beforeEach( () => {
    angular.mock.module('routesApp');
    angular.mock.inject( $controller => {
      this.galleryCtrl = new $controller('GalleryController');
    });
  });

  describe('this.title property', () => {
    it('should have a title property that equals "welcome to the gallery"')
  });
});
