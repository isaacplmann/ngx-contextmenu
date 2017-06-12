import { ContextMenuComponent } from './';
import { ContextMenuContentComponent } from './contextMenuContent.component';
import { ContextMenuInjectorService } from './contextMenuInjector.service';
import { ComponentRef, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export interface IContextMenuClickEvent {
  contextMenu?: ContextMenuComponent;
  event: MouseEvent;
  parentContextMenu?: ContextMenuContentComponent;
  item: any;
}

@Injectable()
export class ContextMenuService {
  public isDestroyingLeafMenu = false;

  public show: Subject<IContextMenuClickEvent> = new Subject<IContextMenuClickEvent>();
  public triggerClose: Subject<ContextMenuContentComponent> = new Subject();
  public close: Subject<Event> = new Subject();

  constructor(private contextMenuInjector: ContextMenuInjectorService) {}

  public destroyLeafMenu(): void {
    if (this.isDestroyingLeafMenu) {
      return;
    }
    this.isDestroyingLeafMenu = true;
    setTimeout(() => {
      const cmContents: ComponentRef<ContextMenuContentComponent>[] = this.contextMenuInjector.getByType(this.contextMenuInjector.type);
      if (cmContents.length > 1) {
        cmContents[cmContents.length - 2].instance.focus();
      }
      if (cmContents.length > 0) {
        this.contextMenuInjector.destroy(cmContents[cmContents.length - 1]);
      }
      this.isDestroyingLeafMenu = false;
    });
  }
}
