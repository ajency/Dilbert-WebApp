import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PopoverContentPage } from '../pages/popover/popover';
import { SummarySidebarComponent } from '../components/summary-sidebar/summary-sidebar';
import { SummaryContentComponent } from '../components/summary-content/summary-content';

import {StyleGuidePage} from '../pages/style-guide/style-guide';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PopoverContentPage,
    SummarySidebarComponent,
    SummaryContentComponent,
    StyleGuidePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PopoverContentPage,
    StyleGuidePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
