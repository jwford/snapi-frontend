import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleFeedComponent } from './article-feed/article-feed.component';
import { ArticleFeedItemComponent } from './article-feed-item/article-feed-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleFeedComponent,
    ArticleFeedItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
