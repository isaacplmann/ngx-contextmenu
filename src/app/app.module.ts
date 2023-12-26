// import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ContextMenuModule } from '@argentumcode/ngx-contextmenu';
import { AppComponent } from './app.component';
import { ChildOneComponent } from './components/child1.component';
import { ChildTwoComponent } from './components/child2.component';

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
      },
    ]),
  ],
})
export class AppModule {}
