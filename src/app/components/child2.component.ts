import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'child-two',
  template: `
    <h3>Routing Two</h3>
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

export class ChildTwoComponent {
  public items: any[] = [{
    name: 'One',
    url: '/one',
  }, {
    name: 'Two',
    url: '/two',
  }];

  constructor(private router: Router) { }

  showMessage(message: any) {
    console.log(message);
  }

  go(item: any) {
    this.router.navigateByUrl(item.url);
  }

}
