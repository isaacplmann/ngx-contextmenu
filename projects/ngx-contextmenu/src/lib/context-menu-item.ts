import { ContextMenuItemInterface } from './context-menu-item.interface';

export class ContextMenuItem implements ContextMenuItemInterface {
  currentItem: any = undefined;
  divider = false;
  enabled: boolean | ((item: any) => boolean) = true;
  isActive: boolean = false;
  passive = false;
  subMenu: any = undefined;
  visible: boolean | ((item: any) => boolean) = true;

  executeFunction?: (item: any, event?: MouseEvent | KeyboardEvent) => void;

  text?: string;

  constructor(
    props: Partial<
      Pick<
        ContextMenuItem,
        | 'divider'
        | 'enabled'
        | 'passive'
        | 'subMenu'
        | 'visible'
        | 'text'
        | 'executeFunction'
      >
    >
  ) {
    if (props.divider !== undefined) {
      this.divider = props.divider;
    }
    if (props.enabled !== undefined) {
      this.enabled = props.enabled;
    }
    if (props.passive !== undefined) {
      this.passive = props.passive;
    }
    if (props.subMenu !== undefined) {
      this.subMenu = props.subMenu;
    }
    if (props.visible !== undefined) {
      this.visible = props.visible;
    }
    if (props.text !== undefined) {
      this.text = props.text;
    }
    if (props.executeFunction !== undefined) {
      this.executeFunction = props.executeFunction;
    }
  }

  get disabled() {
    return (
      this.passive ||
      this.divider ||
      !this.evaluateIfFunction(this.enabled, this.currentItem)
    );
  }

  public evaluateIfFunction(value: any, item: any): any {
    if (value instanceof Function) {
      return value(item);
    }
    return value;
  }

  callback(item: any, $event?: MouseEvent | KeyboardEvent): void {
    if (!this.evaluateIfFunction(this.enabled, item)) {
      return;
    }
    if (this.executeFunction) {
      this.executeFunction(item, $event);
    }
  }

  setActiveStyles(): void {
    this.isActive = true;
  }

  setInactiveStyles(): void {
    this.isActive = false;
  }
}
