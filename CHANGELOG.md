<a name="1.0.0"></a>
# [1.0.0](https://github.com/isaacplmann/ngx-contextmenu) (2017-03-31)


### BREAKING CHANGES

* **position:** Context menu is injected on the root app element to avoid having to compensate for css positioning
* **dependencies:** Depends on Angular 4+
* **template:** Use ng-template instead of template
* **declarative:** No imperative way of declaring context menus. i.e. can't passing `actions` into `contextMenuService.show.next({})`


<a name="0.8.1"></a>
# [0.8.1](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.8.0...v0.8.1) (2017-02-28)


### Bug Fixes

* **position:** Default to 100x100 size if menuElement is undefined



<a name="0.8.0"></a>
# [0.8.0](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.7.7...v0.8.0) (2017-02-27)


### Features

* **passive:** Add a passive menuitem that will not close the menu when clicked



<a name="0.7.7"></a>
# [0.7.7](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.7.6...v0.7.7) (2017-02-10)


### Bug Fixes

* **position:** Use getComputedStyle to calculate offsetParent style



<a name="0.7.6"></a>
# [0.7.6](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.7.5...v0.7.6) (2017-02-06)


### Bug Fixes

* **position:** Don't offset context menu when inside fixed positioned element



<a name="0.7.5"></a>
# [0.7.5](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.7.4...v0.7.5) (2017-02-01)


### Bug Fixes

* **position:** Don't offset context menu when inside absolute positioned element



<a name="0.7.4"></a>
# [0.7.4](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.7.3...v0.7.4) (2017-01-30)


### Bug Fixes

* **position:** Recover when context menu offsetParent is undefined



<a name="0.7.3"></a>
# [0.7.3](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.7.1...v0.7.3) (2017-01-27)


### Bug Fixes

* **position:** Position contextmenu when parent element has 3d transform



<a name="0.7.2"></a>
# 0.7.2 (2017-01-27)

### Bad build - ignore


<a name="0.7.1"></a>
# [0.7.1](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.7.0...v0.7.1) (2017-01-18)


### Bug Fixes

* **closing:** Close context menu with esc key in Safari



<a name="0.7.0"></a>
# [0.7.0](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.6.0...v0.7.0) (2017-01-05)


### Features

* **dividers:** Add appropriate divider class for bootstrap 4
* **position:** Position context menu to the left or above the mouse location, if the menu goes outside the body element
* **closing:** Hide the context menu on escape keydown or window scroll events



<a name="0.6.0"></a>
# [0.6.0](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.5.3...v0.6.0) (2016-12-08)


### Features

* **dividers:** Add the ability to create dividers in the context menu ([c050ae5](https://github.com/isaacplmann/angular2-contextmenu/commit/c050ae5))



<a name="0.5.3"></a>
## [0.5.3](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.5.2...v0.5.3) (2016-12-02)


### Bug Fixes

* **styles:** Remove invisible context menu items from the DOM instead of using [hidden] attribute ([1a7121e](https://github.com/isaacplmann/angular2-contextmenu/commit/1a7121e))



<a name="0.5.1"></a>
# [0.5.1](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.4.1...v0.5.1) (2016-10-20)
- Add `forRoot` function to globally set `useBootstrap4`


<a name="0.4.1"></a>
## [0.4.1](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.1.5...v0.4.1) (2016-10-12)
- Fix bug `[enabled]` as a function not blocking execution


<a name="0.4.0"></a>
# [0.4.0](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.1.5...v0.4.0) (2016-10-11)
- `[contextMenu]` and `[contextMenuSubject]` to automate wiring up the context menu
- `[visible]` and `[enabled]` can be booleans or functions
- Can have multiple context menus per component


<a name="0.2.1"></a>
## [0.2.1](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.1.5...v0.2.1) (2016-09-12)
- Fix type definition for `ContextMenuService` to make `actions` optional


<a name="0.2.0"></a>
# [0.2.0](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.1.5...v0.2.0) (2016-09-12)
- Add `ContextMenuItemComponent` for declarative configuration


<a name="0.1.11"></a>
## [0.1.11](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.1.5...v0.1.11) (2016-07-28)



<a name="0.1.10"></a>
## [0.1.10](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.1.5...v0.1.10) (2016-07-28)



<a name="0.1.10"></a>
## [0.1.10](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.1.5...v0.1.10) (2016-07-26)



<a name="0.1.5"></a>
## [0.1.5](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.1.4...v0.1.5) (2016-05-25)



<a name="0.1.4"></a>
## [0.1.4](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.1.3...v0.1.4) (2016-05-25)



<a name="0.1.3"></a>
## [0.1.3](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.1.2...v0.1.3) (2016-05-25)



<a name="0.1.2"></a>
## [0.1.2](https://github.com/isaacplmann/angular2-contextmenu/compare/v0.1.1...v0.1.2) (2016-05-25)



<a name="0.1.1"></a>
## 0.1.1 (2016-05-25)



