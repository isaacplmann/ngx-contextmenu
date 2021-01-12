import {ContextMenuItem} from './contextMenu.item';

export class ContextMenu {
  items: Array<ContextMenuItem>;
  menuClass = '';

  constructor(props: {items: Array<ContextMenuItem>, menuClass: string}) {
    this.items = props.items;
    this.menuClass = props.menuClass;
  }
}
