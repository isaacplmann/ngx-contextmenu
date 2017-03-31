# angular2-contextmenu

A context menu built with Angular 2 inspired by [ui.bootstrap.contextMenu](https://github.com/Templarian/ui.bootstrap.contextMenu).  Bootstrap classes are included in the markup, but there is no explicit dependency on Bootstrap. [Demo](http://plnkr.co/edit/wpJXpEh4zNZ4uCxTURx2?p=preview)

## Installation

- `npm install angular2-contextmenu`
- import ContextMenuModule into your app module

## Usage

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

- Each context menu item is a `<template>` element with the `contextMenuItem` attribute directive applied.
- If the `item` object is used in the context menu item template, the `let-item` attribute must be applied to the `<template>` element. 
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
  <template contextMenuItem let-item [visible]="isMenuItemType1" [enabled]="false" (execute)="showMessage('Hi, ' + $event.item.name)">
    Say hi, {{item?.name}}!  <my-component [attribute]="item"></my-component>
    With access to the outside context: {{ outsideValue }}
  </template>
</context-menu>
```
```js
public outsideValue = "something";
public isMenuItemType1(item: any): boolean {
  return item.type === 'type1';
}
```

## Binding `this` for `visible` and `enabled` functions

If you need access to properties in your component from within the `enabled` or `visible` functions, you'll need to pass in a version of the function with `this` bound to your component.

```html
<ng-template ... [visible]="isMenuItemOutsideValueBound">
```
```js
public outsideValue = "something";
public isMenuItemOutsideValueBound = this.isMenuItemOutsideValue.bind(this);
public isMenuItemOutsideValue(item: any): boolean {
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
import { ContextMenuService } from 'angular2-contextmenu';

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

## Custom Styles

The html that is generated for the context menu looks like this:

```html
<div class="dropdown angular2-contextmenu">
  <ul class="dropdown-menu">
    <li>
      <a><!-- the template for each context menu item goes here --></a>
      <span><!-- the template for each passive context menu item goes here --></span>
    </li>
  </ul>
</div>
```

You can key off of the `angular2-contextmenu` class to create your own styles.  Note that the `ul.dropdown-menu` will have inline styles applied for `position`, `display`, `left` and `top` so that it will be positioned at the cursor when you right-click.

```css
.angular2-contextmenu .dropdown-menu {
  border: solid 1px chartreuse;
  background-color: darkgreen;
  padding: 0;
}
.angular2-contextmenu li {
  display: block;
  border-top: solid 1px chartreuse;
  text-transform: uppercase;
  text-align: center;
}
.angular2-contextmenu li:first-child {
  border-top:none;
}
.angular2-contextmenu a {
  color:chartreuse;
  display: block;
  padding: 0.5em 1em;
}
.angular2-contextmenu a:hover {
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

## Close event emitter

There is a `(close)` output EventEmitter that you can subscribe to for notifications when the context menu closes (either by clicking outside or choosing a menu item).

```html
<context-menu (close)="processContextMenuCloseEvent()"></context-menu>
```

## CSS Transforms

The context menu will correctly position itself as long as the `<context-menu>` element does not have a parent element that has a complex transform applied to it.  Complex in this case means anything besides a simple 2d translation.  So rotate, skew, stretch, scale, z-axis translation will all cause the context menu to appear in unexpected places.  The common scenario of rendering an element with `transform: translate3d(0px 0px 0px)` in order to trigger the browser's GPU works just fine.
