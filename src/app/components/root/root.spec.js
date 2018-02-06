import app from '../../app';

describe('Component: root', function () {
    beforeEach(angular.mock.module(app));
   
    let element;
    let scope;
    beforeEach(angular.mock.inject(function($rootScope, $compile){
      scope = $rootScope.$new();
      element = angular.element('<root></root>');
      element = $compile(element)(scope);
      scope.$apply();
    }));
   
    it('should render the text', function() {
      let h1 = element.find('h1');
      expect(h1.text()).toBe('Hello World!!');
    });
   
  });


