import { SideBarData, WeekData, Dates } from './summary-sidbar.data';
import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as moment from 'moment';
import { Observable } from 'rxjs/Rx';

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
  weekData: WeekData;
  currentTotal: number = 0;
  currentDay: Dates;
  runningTime: string = '0.0';

  @Input()
  set sideBarData(passedData: SideBarData) {
    this.data = passedData;
    this.data.week.forEach((week) => {
      if (week.is_current) {
        this.weekData = week; // set current week day
      }
    });

    //sort date closest to recent dates
    this.data.dates.sort(function (a: Dates, b: Dates) {
      if (moment(a.date, "DD-MM-YYYY").isBefore(moment(b.date, "DD-MM-YYYY"))) return 1;
      else if (moment(a.date, "DD-MM-YYYY").isAfter(moment(b.date, "DD-MM-YYYY"))) return -1;
      else return 0;
    });
    this.data.dates.sort(function (a: Dates, b: Dates) {
      return b.week_no - a.week_no;
    });



    //calculating total working time
    this.data.dates.forEach((date) => {
      if (date.week_no == this.weekData.week_no) {
        var currenttime = moment(date.hours_completed, "hh:mm:ss").format("h.m")
        this.currentTotal += Number(currenttime);
        if (moment(date.date, "DD-MM-YYYY").isSame(moment("23-06-2017", "DD-MM-YYYY"))) {
          this.currentDay = date;
          let timer = Observable.timer(0, 60000);// updates the timer every minute
          timer.subscribe(t => {
            var duration = moment.duration(moment().diff(moment(this.currentDay.start_time, "hh:mm:ss")));
            var hours = duration.asHours();
            var minutes = duration.minutes();
            this.runningTime = hours.toFixed(2)/*+"."+minutes*/;
          });
        }
      }
    });
  }

  get sideBarData(): SideBarData { return this.data; }

  constructor(public navCtrl: NavController) {
  }

  openSummary() {
    var navOption = {
      animation: "ios-transition"
    }
    this.navCtrl.push('MySummaryPage', {}, navOption);
  }

  //display and format the time and date for the list item
  getDayDate(date: string, option: number): string {
    var text: string;
    switch (option) {
      case 1:
        text = moment(date, "DD-MM-YYYY").format("ddd");
        break;
      case 2:
        text = moment(date, "DD-MM-YYYY").format("MMM D");
        break;
      case 3:
        text = moment(date, "kk:mm:ss").format("hh:mm a");
        break;
      case 4:
        if (date.length > 0) {
          text = moment(date, "kk:mm:ss").format("hh:mm a");
        } else {
          text = 'Online'
        }
        break;
      case 5:
        text = moment(date, "kk:mm:ss").format("hh:mm");
        break;
        case 6:
        text = moment(date, "DD-MM-YYYY").format("dddd Do, MMMM");
        break;
         case 7:
          text = moment(date, "kk:mm:ss").format("hh:mm a");
        break;
    }
    return text;
  }

  //to assign style fot the different condition
  getStyle(style: string): string {
    var styleText: string;
    switch (style) {
      case "online":
        styleText = "success";
        break;
      case "none":
        styleText = "success";
        break;
      default:
        styleText = "";
        break;
    }
    return styleText;
  }
}
