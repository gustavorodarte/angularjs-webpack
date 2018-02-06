import angular from 'angular';

import RootTemplate from './root.template.html';
import RootController from './root.controller';
import './root.styles.scss';

export default

angular.module('app.root', [])
.component('root', {
  template: RootTemplate,
  controller: RootController,
  controllerAs: '$ctrl',
})
.name;