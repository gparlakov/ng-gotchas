import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TimeWidgetComponent } from './time-widget/time-widget.component';
import { FeedModule } from './feed/feed.module';
import { TimeService } from './services/time.service';


@NgModule({
  declarations: [
    AppComponent,
    TimeWidgetComponent
  ],
  imports: [
    BrowserModule,
    FeedModule
  ],
  providers: [TimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
