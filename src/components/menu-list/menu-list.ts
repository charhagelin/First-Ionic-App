import { Component } from '@angular/core';

/**
 * Generated class for the MenuListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'menu-list',
  templateUrl: 'menu-list.html'
})
export class MenuListComponent {

  menu: [{name: string}] = [{name: "Beef"}, {name: "fish"}, {name: "veggies"}];

  constructor() {
    console.log('Hello MenuListComponent Component');
  }

}
