import { ContextMenuComponent } from './contextMenu.component';
import { ContextMenuService } from './contextMenu.service';
import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[contextMenu]',
})
export class ContextMenuAttachDirective {
  @Input() public contextMenuSubject: any;
  @Input() public contextMenu: ContextMenuComponent;

  constructor(private contextMenuService: ContextMenuService) { }

  @HostListener('contextmenu', ['$event'])
  public onContextMenu(event: MouseEvent): void {
    if (!this.contextMenu.disabled) {
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
