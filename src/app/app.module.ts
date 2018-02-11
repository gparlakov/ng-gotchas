import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ServicesModule } from './services/services.module';
import { TimeWidgetComponent } from './time-widget/time-widget.component';
import { FeedModule } from './feed/feed.module';


@NgModule({
  declarations: [
    AppComponent,
    TimeWidgetComponent
  ],
  imports: [
    BrowserModule,
    ServicesModule,
    FeedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
