import { SideBarData } from './summary-sidbar.data';
import { SummarySidebarService } from './summary-sidebar.service';
import { Component } from '@angular/core';

/**
 * Generated class for the SummarySidebarComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'summary-sidebar',
  templateUrl: 'summary-sidebar.html',
  providers: [SummarySidebarService]
})
export class SummarySidebarComponent {

  text: string;
  sideBarData: SideBarData;

  constructor(public sidebarService: SummarySidebarService) {
    console.log('Hello SummarySidebarComponent Component');
    this.text = 'Hello World';
    this.sidebarService.getSideBarData("").then(sideBarData => this.sideBarData = sideBarData);
    console.log(SideBarData);
  }

}
