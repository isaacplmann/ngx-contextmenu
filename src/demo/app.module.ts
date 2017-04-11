import { ChildTwoComponent } from './child2.component';
import { ChildOneComponent } from './child1.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContextMenuModule } from '../lib';
import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, ChildOneComponent, ChildTwoComponent],
  imports: [
    BrowserModule,
    CommonModule,
    ContextMenuModule,
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
  ],
  providers: [/* TODO: Providers go here */],
})
export class AppModule { }
