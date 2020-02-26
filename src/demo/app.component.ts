import { Component, ViewChild, ElementRef } from '@angular/core';
import { ContextMenuService, ContextMenuComponent } from 'ngx-contextmenu';

@Component({
  selector: 'ngx-context-menu-demo',
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

  @ViewChild('wrapper')
  private wrapper: ElementRef<HTMLDivElement>;

  public disableBasicMenu = false;
  public items: any[] = [
    {
      name: 'John',
      otherProperty: 'Foo',
      layout: {
        height: '90px',
        left: '0px',
        top: '0px',
        width: '98px',
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
        height: '90px',
        left: '98px',
        top: '0px',
        width: '98px',
      },
      actions: [{
        enabled: true,
        execute: (item: any): void => { (<any>window).fake.doesntexist = 2; },
        html: (item: any): string => `Joe something: ${item.name}`,
        visible: true,
      }],
    },
  ];
  public outsideValue = 'something';

  @ViewChild('basicMenu') public basicMenu: ContextMenuComponent;
  @ViewChild('enableAndVisible') public enableAndVisible: ContextMenuComponent;
  @ViewChild('withFunctions') public withFunctions: ContextMenuComponent;

  constructor(private contextMenuService: ContextMenuService) { }

  public canUseFullScreen(): boolean {
    return !!this.wrapper.nativeElement.requestFullscreen;
  }

  public requestFullScreen(): void {
    if (this.canUseFullScreen()) {
      this.wrapper.nativeElement.requestFullscreen();
    } else {
      console.log('cant use fullscreen');
    }
  }

  public onContextMenu($event: MouseEvent, item: any): void {
    this.contextMenuService.show.next({ event: $event, item: item });
    $event.preventDefault();
  }

  public showMessage(message: any, data?: any): void {
    console.log(message, data);
  }

  public onlyJohn(item: any): boolean {
    return item.name === 'John';
  }

  public onlyJoe(item: any): boolean {
    return item.name === 'Joe';
  }

  public log(message: any): void {
    console.log(message);
  }
}
