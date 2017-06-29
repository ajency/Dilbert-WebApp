import { SummaryContentComponent } from './../../components/summary-content/summary-content';
import { SideBarData, Dates } from './../../components/summary-sidebar/summary-sidbar.data';
import { SummarySidebarService } from './../../components/summary-sidebar/summary-sidebar.service';
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PopoverContentPage } from '../popover/popover';
import {StyleGuidePage} from '../style-guide/style-guide';
import * as moment from 'moment';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [SummarySidebarService]
})
export class HomePage {
  @ViewChild(SummaryContentComponent) sideContentObj: SummaryContentComponent;
  sideBarData: SideBarData;
  currentDay: Dates;

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public sideBarService: SummarySidebarService) {

  }
  openPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverContentPage);
    popover.present({
      ev: myEvent
    });
  }
  openStyle(){

    var navOption = {
      animation: "ios-transition"
      }
    
    this.navCtrl.push(StyleGuidePage,{},navOption);
  }

  // ionViewDidLoad() {
  //   this.navBar.backButtonClick = (e:UIEvent)=>{
  //   var navOption = {
  //   animation: "ios-transition"
  //   }
    
  //   this.navCtrl.pop(navOption);
  //   }
  // }

  ionViewWillEnter() {
    this.sideBarService.getSideBarData("").then((data) => {
      this.sideBarData = data;
      console.log('data recieved', data);
      this.sideBarData.dates.forEach((date) => {
        if (moment(date.date, "DD-MM-YYYY").diff(moment("19-06-2017", "DD-MM-YYYY"))==0) {
          this.currentDay = date;
          console.log('currentDay', this.currentDay);
        }
      });
    }).catch(error => console.log("error", error));
  }
}
