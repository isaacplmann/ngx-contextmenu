import { ContextMenuComponent } from './';
import { Subject } from 'rxjs/Rx';
export interface IContextMenuClickEvent {
    contextMenu?: ContextMenuComponent;
    event: MouseEvent;
    item: any;
}
export declare class ContextMenuService {
    show: Subject<IContextMenuClickEvent>;
}
