import { Directive, Input, Output, EventEmitter, TemplateRef } from '@angular/core';

@Directive({
  /* tslint:disable:directive-selector-type */
  selector: '[contextMenuItem]',
  /* tslint:enable:directive-selector-type */
})
export class ContextMenuItemDirective {
  @Input() public divider: boolean = false;
  @Input() public passive: boolean = false;
  @Input() public enabled: boolean | ((item: any) => boolean) = true;
  @Input() public visible: boolean | ((item: any) => boolean) = true;
  @Output() public execute: EventEmitter<{ event: Event, item: any }> = new EventEmitter<{ event: Event, item: any }>();

  constructor(public template: TemplateRef<{ item: any }>) { }

  public evaluateIfFunction(value: any, item: any): any {
    if (value instanceof Function) {
      return value(item);
    }
    return value;
  }

  public triggerExecute(item: any, $event?: MouseEvent): void {
    if (!this.evaluateIfFunction(this.enabled, item)) {
      return;
    }
    this.execute.emit({ event: $event, item });
  }
}
