import { ContextMenuItemDirective } from './contextMenu.item.directive';
import { IContextMenuOptions } from './contextMenu.options';
import { ContextMenuService, IContextMenuClickEvent } from './contextMenu.service';
import { ContextMenuInjectorService } from './contextMenuInjector.service';
import { ChangeDetectorRef, ElementRef, EventEmitter, QueryList } from '@angular/core';
export interface ILinkConfig {
    click: (item: any, $event?: MouseEvent) => void;
    enabled?: (item: any) => boolean;
    html: (item: any) => string;
}
export interface MouseLocation {
    left?: string;
    marginLeft?: string;
    marginTop?: string;
    top?: string;
}
export declare class ContextMenuComponent {
    private _contextMenuService;
    private changeDetector;
    private elementRef;
    private options;
    private contextMenuInjector;
    useBootstrap4: boolean;
    close: EventEmitter<any>;
    menuItems: QueryList<ContextMenuItemDirective>;
    menuElement: ElementRef;
    visibleMenuItems: ContextMenuItemDirective[];
    links: ILinkConfig[];
    isShown: boolean;
    isOpening: boolean;
    item: any;
    event: MouseEvent;
    private mouseLocation;
    constructor(_contextMenuService: ContextMenuService, changeDetector: ChangeDetectorRef, elementRef: ElementRef, options: IContextMenuOptions, contextMenuInjector: ContextMenuInjectorService);
    onMenuEvent(menuEvent: IContextMenuClickEvent): void;
    isMenuItemVisible(menuItem: ContextMenuItemDirective): boolean;
    setVisibleMenuItems(): void;
    evaluateIfFunction(value: any): any;
}
