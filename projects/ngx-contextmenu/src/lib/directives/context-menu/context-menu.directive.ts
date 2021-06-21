import { Directive, HostListener, Input } from '@angular/core';
import { ContextMenuComponent } from '../../components/context-menu/context-menu.component';
import { ContextMenuService } from '../../services/context-menu/context-menu.service';

@Directive({
  selector: '[contextMenu]',
})
export class ContextMenuAttachDirective {
  @Input() public contextMenuSubject: any;
  @Input() public contextMenu?: ContextMenuComponent;

  constructor(private contextMenuService: ContextMenuService) {}

  @HostListener('contextmenu', ['$event'])
  public onContextMenu(event: MouseEvent): void {
    if (this.contextMenu && !this.contextMenu.disabled) {
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
