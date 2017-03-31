import { ContextMenuComponent } from './contextMenu.component';
import { ContextMenuService } from './contextMenu.service';
export declare class ContextMenuAttachDirective {
    private contextMenuService;
    contextMenuSubject: any;
    contextMenu: ContextMenuComponent;
    constructor(contextMenuService: ContextMenuService);
    onContextMenu(event: MouseEvent): void;
}
