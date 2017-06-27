import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController} from 'ionic-angular';
import { PopoverContentPage } from '../popover/popover';
import {StyleGuidePage} from '../style-guide/style-guide';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }
  openPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverContentPage);
    popover.present({
      ev: myEvent
    });
  }
  openStyle(){
    this.navCtrl.push(StyleGuidePage);
  }

}
