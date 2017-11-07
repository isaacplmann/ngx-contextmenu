import { ContextMenuComponent } from './contextMenu.component';
import { ContextMenuService } from './contextMenu.service';
import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[contextMenu]',
})
export class ContextMenuAttachDirective {
  @Input() public contextMenuSubject: any;
  @Input() public contextMenu: ContextMenuComponent;

  private touchStart: number;

  constructor(private contextMenuService: ContextMenuService) { }

  @HostListener('contextmenu', ['$event'])
  public onContextMenu(event: MouseEvent): void {
    this.contextMenuService.show.next({
      contextMenu: this.contextMenu,
      event,
      item: this.contextMenuSubject,
    });
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('touchstart', ['$event'])
  public onTouchStart(event: MouseEvent): void {
    this.touchStart = event.timeStamp;
  }

  @HostListener('touchend', ['$event'])
  public onTouchEnd(event: MouseEvent): void {
    if ( event.timeStamp - this.touchStart < 500 ) return;
    console.log( event );
    this.contextMenuService.show.next({
      contextMenu: this.contextMenu,
      event,
      item: this.contextMenuSubject,
    });
    event.preventDefault();
    event.stopPropagation();
  }
}
