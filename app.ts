/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'my-app' // Defines the <my-app></my-app> tag
})
@View({
  template: '<h1>Hello {{ name }}</h1>' // Defines the inline template for the component (can also be external)
  // To use an external template, specify a templateUrl property and give it the path to the HTML file.
})
// Component controller
class MyAppComponent {
  name: string;
  constructor() {
    this.name = 'Alice';
  }
}

bootstrap(MyAppComponent);
