import { AppService } from './app-service.ts';
import { SummarySidebarService } from './../components/summary-sidebar/summary-sidebar.service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { PopoverContentPage } from '../pages/popover/popover';
import { SummarySidebarComponent } from '../components/summary-sidebar/summary-sidebar';
import { SummaryContentComponent } from '../components/summary-content/summary-content';

import {StyleGuidePage} from '../pages/style-guide/style-guide';

import {MySummaryPage} from '../pages/my-summary/my-summary';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PopoverContentPage,
    SummarySidebarComponent,
    SummaryContentComponent,
    StyleGuidePage,
    MySummaryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PopoverContentPage,
    StyleGuidePage,
    MySummaryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SummarySidebarService,
    AppService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
