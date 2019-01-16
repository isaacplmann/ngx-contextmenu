# ngx-contextmenu

A context menu built with Angular (6) inspired by [ui.bootstrap.contextMenu](https://github.com/Templarian/ui.bootstrap.contextMenu).  Bootstrap classes are included in the markup, but there is no explicit dependency on Bootstrap. [Demo](https://isaacplmann.github.io/ngx-contextmenu/) [Stackblitz example](https://stackblitz.com/edit/ngx-contextmenu-example)

## Installation

- `npm install ngx-contextmenu @angular/cdk`
- import ContextMenuModule.forRoot() into your app module
- Make sure to include `<!doctype html>` at the top of your `index.html`

## Usage

### Angular 5 support

Please use ngx-contextmenu@4.2.0 with Angular 5 projects.

### Template

```html
<ul>
    <li *ngFor="let item of items" [contextMenu]="basicMenu" [contextMenuSubject]="item">Right Click: {{item?.name}}</li>
</ul>
<context-menu>
  <ng-template contextMenuItem (execute)="showMessage('Hi, ' + $event.item.name)">
    Say hi!
  </ng-template>
  <ng-template contextMenuItem divider="true"></ng-template>
  <ng-template contextMenuItem let-item (execute)="showMessage($event.item.name + ' said: ' + $event.item.otherProperty)">
    Bye, {{item?.name}}
  </ng-template>
  <ng-template contextMenuItem passive="true">
    Input something: <input type="text">
  </ng-template>
</context-menu>
```

### Component Code

```js
@Component({
  ...
})
export class MyContextMenuClass {
  public items = [
      { name: 'John', otherProperty: 'Foo' },
      { name: 'Joe', otherProperty: 'Bar' }
  ];
  @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;
}
```

## Context Menu Items

- Each context menu item is a `<ng-template>` element with the `contextMenuItem` attribute directive applied.
- If the `item` object is used in the context menu item template, the `let-item` attribute must be applied to the `<ng-template>` element. 
  ** Note: ** Make sure to use the `item?.property` syntax in the template rather than `item.property` as the item will be initially `undefined`.
- Every context menu item emits `execute` events. The `$event` object is of the form `{ event: MouseEvent, item: any }` where `event` is the mouse click event
  that triggered the execution and `item` is the current item.
- The `divider` input parameter is optional.  Items default to normal menu items.  If `divider` is `true`, all the other inputs are ignored.
- The `passive` input parameter is optional.  If `passive` is `true`, the menu item will not emit execute events or close
  the context menu when clicked.
- The `enabled` input parameter is optional.  Items are enabled by default.
  This can be a boolean value or a function definition that takes an item and returns a boolean.
- The `visible` input parameter is optional.  Items are visible by default.  This property enables you to show certain context menu items based on what the data item is.
  This can be a boolean value or a function definition that takes an item and returns a boolean.
- Within the template, you have access to any components and variables available in the outer context.

```html
<context-menu>
  <ng-template contextMenuItem let-item [visible]="isMenuItemType1" [enabled]="false" (execute)="showMessage('Hi, ' + $event.item.name)">
    Say hi, {{item?.name}}!  <my-component [attribute]="item"></my-component>
    With access to the outside context: {{ outsideValue }}
  </ng-template>
</context-menu>
```
```js
public outsideValue = "something";
public isMenuItemType1(item: any): boolean {
  return item.type === 'type1';
}
```

## Sub-menus

You can specify sub-menus like this:

```html
<ul>
    <li *ngFor="let item of items" [contextMenu]="basicMenu" [contextMenuSubject]="item">Right Click: {{item?.name}}</li>
</ul>
<context-menu>
  <ng-template contextMenuItem [subMenu]="saySubMenu">
    Say...
  </ng-template>
  <context-menu #saySubMenu>
    <ng-template contextMenuItem (execute)="showMessage('Hi, ' + $event.item.name)">
      ...hi!
    </ng-template>
    <ng-template contextMenuItem (execute)="showMessage('Hola, ' + $event.item.name)">
      ...hola!
    </ng-template>
    <ng-template contextMenuItem (execute)="showMessage('Salut, ' + $event.item.name)">
      ...salut!
    </ng-template>
  </context-menu>
  <ng-template contextMenuItem divider="true"></ng-template>
  <ng-template contextMenuItem let-item (execute)="showMessage($event.item.name + ' said: ' + $event.item.otherProperty)">
    Bye, {{item?.name}}
  </ng-template>
  <ng-template contextMenuItem passive="true">
    Input something: <input type="text">
  </ng-template>
</context-menu>
```

Notes:
1. The sub `<context-menu>` can not be placed inside the `<ng-template>` that references it.
2. Sub-menus may be nested as deeply as you wish.

## Upgrade from angular2-contextmenu 0.x

1. Change `package.json` to reference `ngx-contextmenu` instead of `angular2-contextmenu`
2. Upgrade to `@angular` 4.x
3. Use `<ng-template>` instead of `<template>`
4. Update any styles that referenced `.angular2-contextmenu` to use `.ngx-contextmenu` instead

**Note:** The imperative way of declaring context menu items has been removed.  i.e. You can't pass an `actions` property to `contextMenuService.show.next()`.

## Using `visible` and `enabled` functions

If you need access to properties in your component from within the `enabled` or `visible` functions, you can pass in an arrow function.

```html
<ng-template ... [visible]="isMenuItemOutsideValue">
```
```js
public outsideValue = "something";
public isMenuItemOutsideValue = (item: any): boolean => {
  return item.type === this.outsideValue;
}
```

## Multiple Context Menus
You can use multiple context menus in the same component if you would like.

```html
<ul>
    <li *ngFor="let item of items" [contextMenu]="basicMenu" [contextMenuSubject]="item">{{item?.name}}</li>
</ul>
<context-menu #basicMenu>
  ...
</context-menu>

<ul>
    <li *ngFor="let item of items" [contextMenu]="otherMenu" [contextMenuSubject]="item">{{item?.name}}</li>
</ul>
<context-menu #otherMenu>
  ...
</context-menu>
```

```js
@ViewChild('basicMenu') public basicMenu: ContextMenuComponent;
@ViewChild('otherMenu') public otherMenu: ContextMenuComponent;
```

## Context Menu In a Different Component
If your `<context-menu>` component is in a different component from your list, you'll need to wire up the context menu event yourself.

```html
<ul>
    <li *ngFor="let item of items" (contextmenu)="onContextMenu($event, item)">Right Click: {{item.name}}</li>
</ul>
```

```js
import { ContextMenuService } from 'ngx-contextmenu';

@Component({
  ...
})
export class MyContextMenuClass {
  public items = [
      { name: 'John', otherProperty: 'Foo' },
      { name: 'Joe', otherProperty: 'Bar' }
  ];

  // Optional
  @Input() contextMenu: ContextMenuComponent;

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

## Triggering the Context Menu with a Different Event
The context menu can be triggered at any point using the method above.  For instance, to trigger the context menu
with a left click instead of a right click, use this html:

```html
<ul>
    <li *ngFor="let item of items" (click)="onContextMenu($event, item)">Left Click: {{item.name}}</li>
</ul>
```

This could be `(keydown)`, `(mouseover)`, or `(myCustomEvent)` as well.

## Positioning the Context Menu around an element
If you want to override the context menu positioning to be appended to an element instead of based on mouse position,
provide an `anchorElement` to the `contextMenuService`.  This makes sense if you want to trigger the context menu with
a non-MouseEvent.

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

## Custom Styles

The html that is generated for the context menu looks like this:

```html
<div class="dropdown ngx-contextmenu">
  <ul class="dropdown-menu">
    <li>
      <a><!-- the template for each context menu item goes here --></a>
      <span><!-- the template for each passive context menu item goes here --></span>
    </li>
  </ul>
</div>
```

You can key off of the `ngx-contextmenu` class to create your own styles.  Note that the `ul.dropdown-menu` will have inline styles applied for `position`, `display`, `left` and `top` so that it will be positioned at the cursor when you right-click.

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
  border-top:none;
}
.ngx-contextmenu a {
  color:chartreuse;
  display: block;
  padding: 0.5em 1em;
}
.ngx-contextmenu a:hover {
  color:darkgreen;
  background-color:chartreuse;
}
```

## Bootstrap 4

If you're using Bootstrap 4, you can specify a `useBootstrap4` property in the `forRoot` function of the `ContextMenuModule` in order to get the appropriate class names.  Like this:

```js
@NgModule({
  import: [
    ContextMenuModule.forRoot({
      useBootstrap4: true,
    }),
  ],
})
export class AppModule {}
```

**Or, if you want to repeat yourself,** you can add a `useBootstrap4` attribute to each `context-menu` component.  Like this:

```html
<context-menu [useBootstrap4]="true"></context-menu>
```

## Different styling on menus

If you want to style one menu differently than other menus, you can add a custom style to the menu.

```html
<context-menu [menuClass]="'mystyle'"></context-menu>
```

Please note that the style needs to be global to affect the menu, since the menu element is added to the page outside the component that triggers the menu.

## AutoFocus

You can optionally set focus on the context menu whenever it opens.  This enables a user to easily tab through the context menu items and press enter to select them.

```js
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

You can use the keyboard to manipulate the context menu.  Note: Keyboard navigation should be used in conjunction with `autoFocus`, since key events are only captured when the context menu is focused.

| Key            | Action                                         |
|:--------------:|------------------------------------------------|
| ArrowDown      | Move to next menu item (wrapping)              |
| ArrowUp        | Move to previous menu item (wrapping)          |
| ArrowRight     | Open submenu of current menu item if present   |
| ArrowLeft      | Close current menu unless already at root menu |
| Enter \| Space | Open submenu or execute current menu item      |
| Esc            | Close current menu                             |

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
    <li *ngFor="item in items" [contextMenu]="myContextMenu" [contextMenuSubject]="item">Right Click: {{item.name}}</li>
</ul>
<context-menu #myContextMenu>
  <ng-template *ngFor="let action of contextMenuActions" contextMenuItem let-item
    [visible]="action.visible" [enabled]="action.enabled" [divider]="action.divider"
    (execute)="action.click($event.item)">
    {{ action.html($event.item) }}
  </ng-template>
</context-menu>
```

```ts
@Component({
  ...
})
export class MyContextMenuClass {
  public items = [
      { name: 'John', otherProperty: 'Foo', type: 'type1' },
      { name: 'Joe', otherProperty: 'Bar', type: 'type2' }
  ];
  @ViewChild(ContextMenuComponent) public contextMenu: ContextMenuComponent;
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
