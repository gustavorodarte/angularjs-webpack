import angular from "angular";
import uiRouter from "@uirouter/angularjs";

import config from './app.config.js';

import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import ngMaterial from 'angular-material';

import Root from './components/root/root.component';


const MODULE_NAME = "app";

angular
  .module("app", [uiRouter, ngMaterial, Root])
  .config(config);


  export default MODULE_NAME;