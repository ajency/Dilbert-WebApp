import { SideBarData, WeekData } from './summary-sidbar.data';
import { Component, Input } from '@angular/core';
import { MomentModule } from 'angular2-moment';
import * as moment from 'moment';


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
  data: SideBarData;
  weekData:WeekData;
  currentTotal:number;

  @Input()
  set sideBarData(passedData: SideBarData) {
    this.data= passedData;
    this.data.week.forEach((week) => {
      if(week.is_current){
        this.weekData=week;
      }
    });

    this.data.dates.forEach((date) => {
      if(date.week_no== this.weekData.week_no){
        var currenttime= moment(date.hours_completed,"hh:mm:ss")
      }
      
    });
  }

  get sideBarData(): SideBarData { return this.data; }

  constructor() {}
}
