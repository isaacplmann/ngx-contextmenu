import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child-one',
  template: `
    <h3>Routing One</h3>
    <ul>
      <li *ngFor="let item of items" [contextMenu]="routingMenu" [contextMenuSubject]="item">Right Click: {{item?.name}}</li>
    </ul>
    <context-menu #routingMenu>
      <ng-template contextMenuItem (execute)="showMessage('Hi, ' + $event.item.name); go($event.item)">
        Go!
      </ng-template>
    </context-menu>
  `
})

export class ChildOneComponent {
  public items: any[] = [{
    name: 'One',
    url: '/one',
  }, {
    name: 'Two',
    url: '/two',
  }];

  constructor(private router: Router) { }

  showMessage(message: any): void {
    console.log(message);
  }

  go(item: any): void {
    this.router.navigateByUrl(item.url);
  }

}
