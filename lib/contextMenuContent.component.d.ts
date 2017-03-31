import { ContextMenuItemDirective } from './contextMenu.item.directive';
import { IContextMenuOptions } from './contextMenu.options';
import { ContextMenuService } from './contextMenu.service';
import { ChangeDetectorRef, ElementRef, EventEmitter, Renderer } from '@angular/core';
import { OnInit } from '@angular/core/core';
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
export declare class ContextMenuContentComponent implements OnInit {
    private _contextMenuService;
    private changeDetector;
    private elementRef;
    private options;
    renderer: Renderer;
    menuItems: ContextMenuItemDirective[];
    item: any;
    event: MouseEvent;
    close: EventEmitter<any>;
    menuElement: ElementRef;
    useBootstrap4: boolean;
    isShown: boolean;
    isOpening: boolean;
    private mouseLocation;
    constructor(_contextMenuService: ContextMenuService, changeDetector: ChangeDetectorRef, elementRef: ElementRef, options: IContextMenuOptions, renderer: Renderer);
    ngOnInit(): void;
    stopEvent($event: MouseEvent): void;
    readonly locationCss: any;
    clickedOutside(): void;
    isMenuItemEnabled(menuItem: ContextMenuItemDirective): boolean;
    isMenuItemVisible(menuItem: ContextMenuItemDirective): boolean;
    evaluateIfFunction(value: any): any;
    isDisabled(link: ILinkConfig): boolean;
    execute(link: ILinkConfig, $event?: MouseEvent): void;
    showMenu(): void;
    hideMenu(event?: KeyboardEvent): void;
}
