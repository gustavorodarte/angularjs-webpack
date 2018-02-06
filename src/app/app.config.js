function config($stateProvider, $urlServiceProvider, $locationProvider) {
    
      $locationProvider
        .hashPrefix('');
    
      $urlServiceProvider.rules.otherwise({ state: 'root' });
    
      $stateProvider.state('root', {
        url: '/',
        component: 'root'
      });
    
    };
    
    config.$inject = ['$stateProvider', '$urlServiceProvider', '$locationProvider'];
    export default config;
    