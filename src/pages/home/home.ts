import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams,Navbar } from 'ionic-angular';
import { PopoverController} from 'ionic-angular';
import { PopoverContentPage } from '../popover/popover';
import {StyleGuidePage} from '../style-guide/style-guide';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Navbar) navBar: Navbar;
  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

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

  ionViewDidLoad() {
    this.navBar.backButtonClick = (e:UIEvent)=>{
    var navOption = {
    animation: "ios-transition"
    }
    // todo something
    this.navCtrl.pop(navOption);
    }
  }

}
