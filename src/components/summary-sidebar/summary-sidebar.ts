import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {MySummaryPage} from '../../pages/my-summary/my-summary';

/**
 * Generated class for the SummarySidebarComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'summary-sidebar',
  templateUrl: 'summary-sidebar.html'
})
export class SummarySidebarComponent {

  text: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello SummarySidebarComponent Component');
    this.text = 'Hello World';
  }

  openSummary(){
  	var navOption = {
      animation: "ios-transition"
    }
    this.navCtrl.push(MySummaryPage,{},navOption);
  }

}
