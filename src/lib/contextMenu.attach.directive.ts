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
  private touchMove: boolean;

  constructor(private contextMenuService: ContextMenuService) { }

  @HostListener('contextmenu', ['$event'])
  public onContextMenu(event: MouseEvent): void {
    console.log(event.type);
    this.contextMenuService.show.next({
      contextMenu: this.contextMenu,
      event,
      item: this.contextMenuSubject,
    });
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('touchstart', ['$event'])
  @HostListener('touchmove', ['$event'])
  @HostListener('touchend', ['$event'])
  @HostListener('touchcancel', ['$event'])
  public onTouchEvent( event: TouchEvent ): void {
    let touch = event.touches[0] || event.changedTouches[0];

    if ( event.type === 'touchstart' ) {
      this.touchStart = event.timeStamp;
      this.touchMove = false;
    }

    if ( event.type === 'touchcancel' ) {
      this.touchMove = true;
      this.contextMenuService.closeAllContextMenus();
    }

    if ( event.type === 'touchend' ) {
      if ( event.timeStamp - this.touchStart < 500 || this.touchMove ) return;

      this.contextMenuService.show.next({
        contextMenu: this.contextMenu,
        event,
        item: this.contextMenuSubject,
      });

      event.preventDefault();
      event.stopPropagation();
    }
  }
}
