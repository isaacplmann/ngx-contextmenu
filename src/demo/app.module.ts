import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Scroll } from '@angular/router';

import { ContextMenuModule } from 'ngx-contextmenu';
import { AppComponent } from './app.component';
import { ChildOneComponent } from './child1.component';
import { ChildTwoComponent } from './child2.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, ChildOneComponent, ChildTwoComponent],
  imports: [
    BrowserModule,
    CommonModule,
    ContextMenuModule.forRoot({
      autoFocus: true,
      // useBootstrap4: true,
    }),
    RouterModule.forRoot([
      {
        path: 'two',
        component: ChildTwoComponent,
      },
      {
        path: '**',
        component: ChildOneComponent,
      }
    ]),
    ScrollingModule,
  ],
  providers: [/* TODO: Providers go here */],
})
export class AppModule { }
