# CHANGELOG
## [7.0.0-alpha.1](https://github.com/PerfectMemory/ngx-contextmenu) (2022-01-20)

### Fixes

- Fix README for proper installation instructions

## [7.0.0-alpha.0](https://github.com/PerfectMemory/ngx-contextmenu) (2022-01-20)

### BREAKING CHANGES

- **Dependency**: Require Angular 13

## [6.0.0-alpha.0](https://github.com/PerfectMemory/ngx-contextmenu) (2022-01-20)

- Project forked from https://github.com/isaacplmann/ngx-contextmenu

## [6.0.0](https://github.com/isaacplmann/ngx-contextmenu) (2020-08-19)

### BREAKING CHANGES

- **Dependency**: Require Angular 12

## [5.3.0](https://github.com/isaacplmann/ngx-contextmenu) (2020-08-19)

### Features

- **Dependency**: Allow Angular 10

## [5.2.0](https://github.com/isaacplmann/ngx-contextmenu) (2019-05-03)

### Features

- **Dependency**: Allow Angular 8

## [5.1.1](https://github.com/isaacplmann/ngx-contextmenu) (2018-10-22)

### Fixes

- **Dependency**: Typo in peer dependency

## [5.1.0](https://github.com/isaacplmann/ngx-contextmenu) (2018-10-22)

### Feature

- **Dependency**: Allow Angular 7 dependency

## [5.0.3](https://github.com/isaacplmann/ngx-contextmenu) (2018-08-23)

### Fixes

- **Change detection**: Show browser context menu when context menu disabled

## [5.0.2](https://github.com/isaacplmann/ngx-contextmenu) (2018-06-28)

### Fixes

- **Change detection**: Force change detection when ContextMenuContent is created

## [5.0.1](https://github.com/isaacplmann/ngx-contextmenu) (2018-05-31)

### Fixes

- **CDK**: Support @angular/cdk@6.1

## [5.0.0](https://github.com/isaacplmann/ngx-contextmenu) (2018-05-10)

### BREAKING CHANGES

- **RxJS**: Upgrade library to work with rxjs@6 without rxjs-compat

## [4.2.0](https://github.com/isaacplmann/ngx-contextmenu) (2018-04-06)

### Features

- **style:** Add [menuClass] input to context-menu component

## [4.1.2](https://github.com/isaacplmann/ngx-contextmenu) (2018-01-29)

### Fixes

- **events:** Actually fire (close) event when the context menu closes

## [4.1.1](https://github.com/isaacplmann/ngx-contextmenu) (2017-12-21)

### Fixes

- **types:** Allow anchorElement to be Element | EventTarget

## [4.1.0](https://github.com/isaacplmann/ngx-contextmenu) (2017-12-21)

### Features

- **position:** Allow passing an anchorElement to override positioning

## [4.0.1](https://github.com/isaacplmann/ngx-contextmenu) (2017-12-21)

### Fixes

- **build:** Build error

## [4.0.0](https://github.com/isaacplmann/ngx-contextmenu) (2017-12-21)

### BREAKING CHANGES

- **provider:** Provide ContextMenuService in the forRoot instead of ContextMenuModule itself

## [3.0.2](https://github.com/isaacplmann/ngx-contextmenu) (2017-11-28)

### Fixes

- **build:** Fix build error

## [3.0.1](https://github.com/isaacplmann/ngx-contextmenu) (2017-11-28)

### Fixes

- **dependencies:** Allow @angular/cdk rc0, rc.1 or rc.2

## [3.0.0](https://github.com/isaacplmann/ngx-contextmenu) (2017-11-06)

### BREAKING CHANGES

- **dependencies:** Using @angular/cdk 5.x which requires angular 5.x
- **dependencies:** Dropping support for angular 4.x

### Fixes

- **position:** Add vertical fallback for submenus

## [2.0.0-beta.7](https://github.com/isaacplmann/ngx-contextmenu) (2017-11-06)

### Fixes

- **firefox:** opens and closes instantly in firefox

## [2.0.0-beta.6](https://github.com/isaacplmann/ngx-contextmenu) (2017-11-06)

### Fixes

- **bootstrap4:** Show menu with bootstrap 4-beta.2

## [2.0.0-beta.5](https://github.com/isaacplmann/ngx-contextmenu) (2017-11-03)

### Fixes

- **submenu:** Clicking a menu item with a submenu threw an error

## [2.0.0-beta.4](https://github.com/isaacplmann/ngx-contextmenu) (2017-10-27)

### Fixes

- **position:** Fallback to centering vertically

## [2.0.0-beta.3](https://github.com/isaacplmann/ngx-contextmenu) (2017-10-25)

### Fixes

- **dom:** Remove unused overlay containers from the DOM

## [2.0.0-beta.2](https://github.com/isaacplmann/ngx-contextmenu) (2017-10-25)

### Fixes

- **dependencies:** Build using angular 4.x to support both 4.x and 5.x apps

## [2.0.0-beta.1](https://github.com/isaacplmann/ngx-contextmenu) (2017-10-24)

### BREAKING CHANGES

- **dependencies:** Using @angular/cdk for creating and positioning the contextmenu
- **dependencies:** Support angular 4.x and 5.x

## [1.3.5](https://github.com/isaacplmann/ngx-contextmenu) (2017-08-09)

### Fixes

- **position:** Position within viewport instead of body

## [1.3.4](https://github.com/isaacplmann/ngx-contextmenu) (2017-07-12)

### Fixes

- **hotkey:** Ignore hotkeys when focus is in an editable element

## [1.3.3](https://github.com/isaacplmann/ngx-contextmenu) (2017-06-30)

### Fixes

- **hotkey:** ArrowLeft hotkey only active when context menu focused

## [1.3.2](https://github.com/isaacplmann/ngx-contextmenu) (2017-06-30)

### Fixes

- **hotkey:** Hotkeys only active when context menu focused

## [1.3.1](https://github.com/isaacplmann/ngx-contextmenu) (2017-06-29)

### Fixes

- **bootstrap4:** active class set correctly

## [1.3.0](https://github.com/isaacplmann/ngx-contextmenu) (2017-06-28)

### Features

- **hotkey:** Keyboard shortcuts to use the context menu

## [1.2.1](https://github.com/isaacplmann/ngx-contextmenu) (2017-06-21)

### Fixes

- **hotkey:** Esc key binding throws error when no context menu visible

## [1.2.0](https://github.com/isaacplmann/ngx-contextmenu) (2017-06-12)

### Features

- **submenus:** Add submenus
- **autoFocus:** Autofocus the context menu ul when it opens
- **contextmenu:** [disabled] input on <context-menu>
- **contextmenu:** Close context menu when window is resized

## [1.1.0](https://github.com/isaacplmann/ngx-contextmenu) (2017-05-18)

### Features

- **output:** Emit an event on open

## [1.0.5](https://github.com/isaacplmann/ngx-contextmenu) (2017-05-18)

### Bug Fixes

- **type definitions:** Fix some type definition errors

## [1.0.4](https://github.com/isaacplmann/ngx-contextmenu) (2017-04-26)

### Bug Fixes

- **execute:** Handle errors gracefully during menuItem execution

## [1.0.3](https://github.com/isaacplmann/ngx-contextmenu) (2017-04-11)

### Bug Fixes

- **close:** Unsubscribe when closing context menu

## [1.0.2](https://github.com/isaacplmann/ngx-contextmenu) (2017-04-11)

### Bug Fixes

- **close:** Actually fire close event
- **item:** Allow undefined subject/item

## [1.0.1](https://github.com/isaacplmann/ngx-contextmenu) (2017-03-31)

### Documentation

- **doc:** Remove references to angular2-contextmenu

### BREAKING CHANGES

- **styles:** Styles should reference the `ngx-contextmenu` class instead of `angular2-contextmenu`

## [1.0.0](https://github.com/isaacplmann/ngx-contextmenu) (2017-03-31)

### BREAKING CHANGES

- **position:** Context menu is injected on the root app element to avoid having to compensate for css positioning
- **dependencies:** Depends on Angular 4+
- **template:** Use ng-template instead of template
- **declarative:** No imperative way of declaring context menus. i.e. can't passing `actions` into `contextMenuService.show.next({})`

## [0.8.1](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.8.0...v0.8.1) (2017-02-28)

### Bug Fixes

- **position:** Default to 100x100 size if menuElement is undefined

## [0.8.0](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.7.7...v0.8.0) (2017-02-27)

### Features

- **passive:** Add a passive menuitem that will not close the menu when clicked

## [0.7.7](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.7.6...v0.7.7) (2017-02-10)

### Bug Fixes

- **position:** Use getComputedStyle to calculate offsetParent style

## [0.7.6](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.7.5...v0.7.6) (2017-02-06)

### Bug Fixes

- **position:** Don't offset context menu when inside fixed positioned element

## [0.7.5](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.7.4...v0.7.5) (2017-02-01)

### Bug Fixes

- **position:** Don't offset context menu when inside absolute positioned element

## [0.7.4](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.7.3...v0.7.4) (2017-01-30)

### Bug Fixes

- **position:** Recover when context menu offsetParent is undefined

## [0.7.3](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.7.1...v0.7.3) (2017-01-27)

### Bug Fixes

- **position:** Position contextmenu when parent element has 3d transform

# 0.7.2 (2017-01-27)

### Bad build - ignore

## [0.7.1](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.7.0...v0.7.1) (2017-01-18)

### Bug Fixes

- **closing:** Close context menu with esc key in Safari

## [0.7.0](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.6.0...v0.7.0) (2017-01-05)

### Features

- **dividers:** Add appropriate divider class for bootstrap 4
- **position:** Position context menu to the left or above the mouse location, if the menu goes outside the body element
- **closing:** Hide the context menu on escape keydown or window scroll events

## [0.6.0](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.5.3...v0.6.0) (2016-12-08)

### Features

- **dividers:** Add the ability to create dividers in the context menu ([c050ae5](https://github.com/isaacplmann/angular2-contextmenu/commit/c050ae5))

### [0.5.3](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.5.2...v0.5.3) (2016-12-02)

### Bug Fixes

- **styles:** Remove invisible context menu items from the DOM instead of using [hidden] attribute ([1a7121e](https://github.com/isaacplmann/angular2-contextmenu/commit/1a7121e))

## [0.5.1](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.4.1...v0.5.1) (2016-10-20)

- Add `forRoot` function to globally set `useBootstrap4`

### [0.4.1](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.1.5...v0.4.1) (2016-10-12)

- Fix bug `[enabled]` as a function not blocking execution

## [0.4.0](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.1.5...v0.4.0) (2016-10-11)

- `[contextMenu]` and `[contextMenuSubject]` to automate wiring up the context menu
- `[visible]` and `[enabled]` can be booleans or functions
- Can have multiple context menus per component

### [0.2.1](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.1.5...v0.2.1) (2016-09-12)

- Fix type definition for `ContextMenuService` to make `actions` optional

## [0.2.0](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.1.5...v0.2.0) (2016-09-12)

- Add `ContextMenuItemComponent` for declarative configuration

### [0.1.11](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.1.5...v0.1.11) (2016-07-28)

### [0.1.10](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.1.5...v0.1.10) (2016-07-28)

### [0.1.10](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.1.5...v0.1.10) (2016-07-26)

### [0.1.5](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.1.4...v0.1.5) (2016-05-25)

### [0.1.4](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.1.3...v0.1.4) (2016-05-25)

### [0.1.3](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.1.2...v0.1.3) (2016-05-25)

### [0.1.2](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.1.1...v0.1.2) (2016-05-25)

## 0.1.1 (2016-05-25)
