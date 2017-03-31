import { Component, ViewChild } from '@angular/core';
import { ContextMenuService, ContextMenuComponent } from '../lib';

@Component({
  selector: 'angular2-context-menu-demo',
  styles: [`
.dashboardContainer {
width: 100%;
height: 100%;
position: fixed;
}

.componentsContainer {
position: fixed;
bottom: 0;
top: 100px;
width: 100%; }

.componentContainer {
overflow: auto;
position: absolute; }
`],
  templateUrl: './app.component.html',
})
export class AppComponent {

  public items: any[] = [
    {
      name: 'John',
      otherProperty: 'Foo',
      layout: {
        height: 90,
        left: 0,
        top: 0,
        width: 98,
      },
      actions: [{
        enabled: true,
        execute: (item: any): void => console.log(item),
        html: (item: any): string => `John custom: ${item.name}`,
        visible: true,
      }, {
        divider: true,
        visible: true,
      }, {
        enabled: true,
        execute: (item: any): void => console.log(item),
        html: (item: any): string => `John custom: ${item.name}`,
        visible: true,
      }],
    },
    {
      name: 'Joe',
      otherProperty: 'Bar',
      layout: {
        height: 90,
        left: 98,
        top: 0,
        width: 98,
      },
      actions: [{
        enabled: true,
        execute: (item: any): void => console.log(item),
        html: (item: any): string => `Joe something: ${item.name}`,
        visible: true,
      }],
    },
  ];
  public outsideValue: string = 'something';

  @ViewChild('basicMenu') public basicMenu: ContextMenuComponent;
  @ViewChild('enableAndVisible') public enableAndVisible: ContextMenuComponent;
  @ViewChild('withFunctions') public withFunctions: ContextMenuComponent;

  constructor(private contextMenuService: ContextMenuService) { }

  public onContextMenu($event: MouseEvent, item: any): void {
    this.contextMenuService.show.next({ event: $event, item: item });
    $event.preventDefault();
  }

  public showMessage(message: string): void {
    console.log(message);
  }

  public onlyJohn(item: any): boolean {
    return item.name === 'John';
  }

  public onlyJoe(item: any): boolean {
    return item.name === 'Joe';
  }
}
