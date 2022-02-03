# Angular library @perfectmemory/ngx-contextmenu

[![Test](https://github.com/PerfectMemory/ngx-contextmenu/actions/workflows/test.yml/badge.svg)](https://github.com/PerfectMemory/ngx-contextmenu/actions/workflows/test.yml)
[![Published to NPM](https://github.com/PerfectMemory/ngx-contextmenu/actions/workflows/publish.yml/badge.svg)](https://github.com/PerfectMemory/ngx-contextmenu/actions/workflows/publish.yml) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An context menu component for Angular.

## Installation

- Installation command

```sh
npm install @perfectmemory/ngx-contextmenu @angular/cdk
```

```sh
yarn add @perfectmemory/ngx-contextmenu @angular/cdk
```

- Import in your Angular main module

```ts
import { ContextMenuModule } from '@perfectmemory/ngx-contextmenu';
@NgModule({
  ...
  imports: [
    ContextMenuModule.forRoot({
      autoFocus: true,
    }),
  ],
  ...
})
export class AppModule {}
```

## Angular compatibility

| Angular   | @perfectmemory/ngx-contextmenu |
| --------- | ------------------------------ |
| `^12.0.0` | `^6.0.0`                       |

## Usage

### Template

```html
<ul>
  <li
    *ngFor="let item of items"
    [contextMenu]="basicMenu"
    [contextMenuSubject]="item"
  >
    Right Click: {{ item?.name }}
  </li>
</ul>

<context-menu #basicMenu>
  <ng-template
    contextMenuItem
    (execute)="showMessage(`Hi, ${$event.item.name}`)"
  >
    Say hi!
  </ng-template>
  <ng-template contextMenuItem divider="true"></ng-template>
  <ng-template
    contextMenuItem
    let-item
    (execute)="showMessage(`${$event.item.name} said: ${$event.item.otherProperty}`)"
  >
    Bye, {{ item?.name }}
  </ng-template>
  <ng-template contextMenuItem passive="true">
    Input something: <input type="text" />
  </ng-template>
</context-menu>
```

### Component Code

```ts
@Component({
  ...
})
export class Component {
  public items = [
    { name: 'John', otherProperty: 'Foo' },
    { name: 'Joe', otherProperty: 'Bar' }
  ];

  @ViewChild(ContextMenuComponent)
  public basicMenu: ContextMenuComponent;

  public showMessage(message: string) {
    console.log(message);
  }
}
```

## Context Menu Items

- A line of context menu is a `<ng-template>` element with a `contextMenuItem` attribute directive and following optional inputs
  - `divider` (`boolean`) (default=`false`) when `true` all the other inputs are ignored, the item is a simple divider without action
  - `passive` (`boolean`) (default=`false`) when `true` the menu item will not emit execute events or close
    the context menu when clicked.
  - `enabled` (`boolean | item => boolean`) (default=`true`) Can be a `boolean` value or a function that takes an item and returns a boolean.
  - `visible` (`boolean | item => boolean`) (default=`true`) Can be a `boolean` value or a function that takes an item and returns a boolean.

```html
<ng-template
  contextMenuItem
  [divider]="true/false"
  [enabled]="true/false"
  [passive]="true/false"
  [visible]="true/false"
  (execute)="method($event)"
></ng-template>
```

- Use template binding `let-item` to reference the `item` object inside the menu item template

> **Note:** Make sure to use optional chaining when accessing item properties `item?.name` as the item will be initially `undefined`

```html
<ng-template
  contextMenuItem
  let-item
  (execute)="showMessage(`${$event.item.name} said: ${$event.item.otherProperty}`)"
>
  {{ item?.name }}
</ng-template>
```

- Menu items emit on `execute` output. The `$event` object is of the following form

```ts
{ event: MouseEvent, item: any }
```

## Sub menus

You can specify sub menus like this:

```html
<ul>
  <li
    *ngFor="let item of items"
    [contextMenu]="basicMenu"
    [contextMenuSubject]="item"
  >
    Right Click: {{item?.name}}
  </li>
</ul>
<context-menu #basicMenu>
  <ng-template contextMenuItem [subMenu]="saySubMenu"> Say... </ng-template>
  <context-menu #saySubMenu>
    <ng-template
      contextMenuItem
      (execute)="showMessage(`Hi, ${$event.item.name}`)"
    >
      ...hi!
    </ng-template>
    <ng-template
      contextMenuItem
      (execute)="showMessage(`Hola, ${$event.item.name}`)"
    >
      ...hola!
    </ng-template>
    <ng-template
      contextMenuItem
      (execute)="showMessage(`Salut, ${$event.item.name}`)"
    >
      ...salut!
    </ng-template>
  </context-menu>
  <ng-template contextMenuItem divider="true"></ng-template>
  <ng-template
    contextMenuItem
    let-item
    (execute)="showMessage(`${$event.item.name} said: ${$event.item.otherProperty}`)"
  >
    Bye, {{item?.name}}
  </ng-template>
  <ng-template contextMenuItem passive="true">
    Input something: <input type="text" />
  </ng-template>
</context-menu>
```

> Notes:
>
> 1. Sub `<context-menu>` cannot be placed inside the `<ng-template>` that references it
> 2. Sub-menus may be nested as deeply as you wish.

## Using `visible` and `enabled` functions

If you need access to properties in your component from within the `enabled` or `visible` functions, you can pass in an arrow function.

```html
<ng-template ... [visible]="isMenuItemOutsideValue"></ng-template>
```

```ts
public outsideValue = "something";

public isMenuItemOutsideValue = (item: any): boolean => {
  return item.type === this.outsideValue;
}
```

## Multiple Context Menus

You can use multiple context menus in the same component if you would like.

```html
<ul>
  <li
    *ngFor="let item of items"
    [contextMenu]="basicMenu"
    [contextMenuSubject]="item"
  >
    {{item?.name}}
  </li>
</ul>
<context-menu #basicMenu> ... </context-menu>

<ul>
  <li
    *ngFor="let item of items"
    [contextMenu]="otherMenu"
    [contextMenuSubject]="item"
  >
    {{ item?.name }}
  </li>
</ul>
<context-menu #otherMenu> ... </context-menu>
```

```ts
@ViewChild('basicMenu')
public basicMenu: ContextMenuComponent;

@ViewChild('otherMenu')
public otherMenu: ContextMenuComponent;
```

## Other use cases

### Context menu in a different component

If your `<context-menu>` component is in a different component from your list, you'll need to wire up the context menu event yourself.

```html
<ul>
  <li *ngFor="let item of items" (contextmenu)="onContextMenu($event, item)">
    Right Click: {{item.name}}
  </li>
</ul>
```

```ts
import { ContextMenuService } from '@perfectmemory/ngx-contextmenu';

@Component({
  ...
})
export class MyContextMenuClass {
  public items = [
      { name: 'John', otherProperty: 'Foo' },
      { name: 'Joe', otherProperty: 'Bar' }
  ];

  // Optional
  @Input()
  public contextMenu: ContextMenuComponent;

  constructor(private contextMenuService: ContextMenuService) {}

  public onContextMenu($event: MouseEvent, item: any): void {
    this.contextMenuService.show.next({
      // Optional - if unspecified, all context menu components will open
      contextMenu: this.contextMenu,
      event: $event,
      item: item,
    });
    $event.preventDefault();
    $event.stopPropagation();
  }
}
```

### Triggering the context menu with a different Event

The context menu can be triggered at any point using the method above. For instance, to trigger the context menu
with a left click instead of a right click, use this html:

```html
<ul>
  <li *ngFor="let item of items" (click)="onContextMenu($event, item)">
    Left Click: {{item.name}}
  </li>
</ul>
```

This could be `(keydown)`, `(mouseover)`, or `(myCustomEvent)` as well.

### Positioning the context menu around an element

If you want to override the context menu positioning to be appended to an element instead of based on mouse position,
provide an `anchorElement` to the `contextMenuService`. This makes sense if you want to trigger the context menu with a non-MouseEvent.

```ts
public onContextMenu($event: KeyboardEvent, item: any): void {
  this.contextMenuService.show.next({
    anchorElement: $event.target,
    // Optional - if unspecified, all context menu components will open
    contextMenu: this.contextMenu,
    event: <any>$event,
    item: item,
  });
  $event.preventDefault();
  $event.stopPropagation();
}
```

### Custom Styles

The html that is generated for the context menu looks like this:

```html
<div class="dropdown ngx-contextmenu">
  <ul class="dropdown-menu">
    <li>
      <a><!-- the template for each context menu item goes here --></a>
      <span
        ><!-- the template for each passive context menu item goes here --></span
      >
    </li>
  </ul>
</div>
```

You can key off of the `ngx-contextmenu` class to create your own styles. Note that the `ul.dropdown-menu` will have inline styles applied for `position`, `display`, `left` and `top` so that it will be positioned at the cursor when you right-click.

```css
.ngx-contextmenu .dropdown-menu {
  border: solid 1px chartreuse;
  background-color: darkgreen;
  padding: 0;
}
.ngx-contextmenu li {
  display: block;
  border-top: solid 1px chartreuse;
  text-transform: uppercase;
  text-align: center;
}
.ngx-contextmenu li:first-child {
  border-top: none;
}
.ngx-contextmenu a {
  color: chartreuse;
  display: block;
  padding: 0.5em 1em;
}
.ngx-contextmenu a:hover {
  color: darkgreen;
  background-color: chartreuse;
}
```

### Bootstrap 4

If you're using Bootstrap 4, you can specify a `useBootstrap4` property in the `forRoot` function of the `ContextMenuModule` in order to get the appropriate class names. Like this:

```ts
@NgModule({
  import: [
    ContextMenuModule.forRoot({
      useBootstrap4: true,
    }),
  ],
})
export class AppModule {}
```

> **Or, if you want to repeat yourself,** you can add a `useBootstrap4` attribute to each `context-menu` component. Like this:
>
> ```html
> <context-menu [useBootstrap4]="true"></context-menu>
> ```

### Different styling on menus

If you want to style one menu differently than other menus, you can add a custom style to the menu.

```html
<context-menu menuClass="'custom-class'"></context-menu>
```

> Please note that the style needs to be global to affect the menu, since the menu element is added to the page outside the component that triggers the menu.

### AutoFocus

You can optionally set focus on the context menu whenever it opens. This enables a user to easily tab through the context menu items and press enter to select them.

```ts
@NgModule({
  import: [
    ContextMenuModule.forRoot({
      autoFocus: true,
    }),
  ],
})
export class AppModule {}
```

## Keyboard navigation

You can use the keyboard to manipulate the context menu. Note: Keyboard navigation should be used in conjunction with `autoFocus`, since key events are only captured when the context menu is focused.

|      Key       | Action                                         |
| :------------: | ---------------------------------------------- |
|   ArrowDown    | Move to next menu item (wrapping)              |
|    ArrowUp     | Move to previous menu item (wrapping)          |
|   ArrowRight   | Open submenu of current menu item if present   |
|   ArrowLeft    | Close current menu unless already at root menu |
| Enter \| Space | Open submenu or execute current menu item      |
|      Esc       | Close current menu                             |

## Disable Context Menu

If you need to disable the context menu, you can pass a `boolean` to the `[disabled]` input:

```html
<context-menu [disabled]="true"></context-menu>
```

## Close event emitter

There is a `(close)` output EventEmitter that you can subscribe to for notifications when the context menu closes (either by clicking outside or choosing a menu item).

```html
<context-menu (close)="processContextMenuCloseEvent()"></context-menu>
```

## Dynamic context menu

The items in the context menu are completely controlled by the `contextMenuActions` object.

```html
<ul>
  <li
    *ngFor="item in items"
    [contextMenu]="myContextMenu"
    [contextMenuSubject]="item"
  >
    Right Click: {{item.name}}
  </li>
</ul>
<context-menu #myContextMenu>
  <ng-template
    *ngFor="let action of contextMenuActions"
    contextMenuItem
    let-item
    [visible]="action.visible"
    [enabled]="action.enabled"
    [divider]="action.divider"
    (execute)="action.click($event.item)"
  >
    {{ action.html($event.item) }}
  </ng-template>
</context-menu>
```

```ts
@Component({
  ...
})
export class Component {
  @ViewChild(ContextMenuComponent)
  public contextMenu: ContextMenuComponent;

  public items = [
    { name: 'John', otherProperty: 'Foo', type: 'type1' },
    { name: 'Joe', otherProperty: 'Bar', type: 'type2' }
  ];
  public contextMenuActions = [
    {
      html: (item) => `Say hi!`,
      click: (item) => alert('Hi, ' + item.name),
      enabled: (item) => true,
      visible: (item) => item.type === 'type1',
    },
    {
      divider: true,
      visible: true,
    },
    {
      html: (item) => `Something else`,
      click: (item) => alert('Or not...'),
      enabled: (item) => false,
      visible: (item) => item.type === 'type1',
    },
  ];
}
```

## Inspiration and previous work

This project has been initially forked from [ngx-contextmenu](https://github.com/isaacplmann/ngx-contextmenu.git) to make it possible to port it to Angular 13.
It was originally inspired by [ui.bootstrap.contextMenu](https://github.com/Templarian/ui.bootstrap.contextMenu).
