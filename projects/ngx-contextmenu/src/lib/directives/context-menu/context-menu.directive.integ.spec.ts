import { OverlayModule } from '@angular/cdk/overlay';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { ContextMenuContentComponent } from '../../components/context-menu-content/context-menu-content.component';
import { ContextMenuComponent } from '../../components/context-menu/context-menu.component';
import { ContextMenuItemDirective } from '../../directives/context-menu-item/context-menu-item.directive';
import { ContextMenuService } from '../../services/context-menu/context-menu.service';
import { ContextMenuAttachDirective } from './context-menu.directive';
import { CONTEXT_MENU_OPTIONS } from '../../context-menu.tokens';

describe('Integ: ContextMenuAttachDirective', () => {
  let host: SpectatorHost<ContextMenuAttachDirective>;

  const createHost = createHostFactory({
    component: ContextMenuAttachDirective,
    declarations: [
      ContextMenuItemDirective,
      ContextMenuComponent,
      ContextMenuContentComponent,
    ],
    providers: [
      ContextMenuService,
      {
          provide: CONTEXT_MENU_OPTIONS,
          useValue: {},
      },
    ],
    imports: [OverlayModule],
    shallow: false,
    detectChanges: true,
  });

  afterEach(() => {
    host.fixture.destroy();
  });

  it('should render', () => {
    host = createHost('<div contextMenu></div>');
    expect(host.queryHost(ContextMenuAttachDirective)).toExist();
  });

  describe('with menu items', () => {
    it('should open context menu', () => {
      host = createHost(
        `
        <div [contextMenu]="static" [contextMenuSubject]="item">Right click</div>
        <context-menu #static>
          <ng-template contextMenuItem [visible]="true" [enabled]="false">A</ng-template>
          <ng-template contextMenuItem [visible]="false"                 >B</ng-template>
          <ng-template contextMenuItem [divider]="true"                  >C</ng-template>
          <ng-template contextMenuItem [visible]="true" [enabled]="true" [subMenu]="subMenu">D</ng-template>
          <context-menu #subMenu>
            <ng-template contextMenuItem [visible]="true">DD</ng-template>
          </context-menu>
        </context-menu>
    `,
        { hostProps: { item: { id: 'item-id' } } }
      );
      host.dispatchMouseEvent(host.debugElement, 'contextmenu');
      expect(
        host.query('.cdk-overlay-container context-menu-content', {
          root: true,
        })
      ).toExist();
      expect(
        host.query(
          '.cdk-overlay-container context-menu-content .dropdown-menu',
          {
            root: true,
          }
        )
      ).toHaveClass('show');
      expect(
        host.query(
          '.cdk-overlay-container context-menu-content .dropdown-menu.show li:nth-child(1)',
          {
            root: true,
          }
        )
      ).toHaveClass('disabled');
      expect(
        host.query(
          '.cdk-overlay-container context-menu-content .dropdown-menu.show li:nth-child(2)',
          {
            root: true,
          }
        )
      ).toHaveClass('divider');
      expect(
        host.query(
          '.cdk-overlay-container context-menu-content .dropdown-menu.show li:nth-child(2)',
          {
            root: true,
          }
        )
      ).toHaveAttribute('role', 'separator');
      expect(
        host.query(
          '.cdk-overlay-container context-menu-content .dropdown-menu.show li:nth-child(3) a',
          {
            root: true,
          }
        )
      ).toHaveClass('hasSubMenu');
    });

    it('should navigate the menu on arrow keys', () => {
      host = createHost(
        `
        <div [contextMenu]="static" [contextMenuSubject]="item">Right click</div>
        <context-menu #static>
          <ng-template contextMenuItem [visible]="true"                    >A</ng-template>
          <ng-template contextMenuItem [visible]="true"                    >B</ng-template>
          <ng-template contextMenuItem [divider]="true"                    >C</ng-template>
          <ng-template contextMenuItem [visible]="true" [subMenu]="subMenu">D</ng-template>
          <context-menu #subMenu>
            <ng-template contextMenuItem [visible]="true">DD</ng-template>
          </context-menu>
        </context-menu>
    `,
        { hostProps: { item: { id: 'item-id' } } }
      );
      host.dispatchMouseEvent(host.debugElement, 'contextmenu');
      host.dispatchKeyboardEvent(host.debugElement, 'keydown', {
        key: 'ArrowDown',
        keyCode: 40,
      });
      expect(
        host.query(
          '.cdk-overlay-container context-menu-content .dropdown-menu.show li:nth-child(1)',
          {
            root: true,
          }
        )
      ).toHaveClass('active');
      host.dispatchKeyboardEvent(host.debugElement, 'keydown', {
        key: 'ArrowDown',
        keyCode: 40,
      });
      expect(
        host.query(
          '.cdk-overlay-container context-menu-content .dropdown-menu.show li:nth-child(2)',
          {
            root: true,
          }
        )
      ).toHaveClass('active');
      host.dispatchKeyboardEvent(host.debugElement, 'keydown', {
        key: 'ArrowDown',
        keyCode: 40,
      });
      expect(
        host.query(
          '.cdk-overlay-container context-menu-content .dropdown-menu.show li:nth-child(4)',
          {
            root: true,
          }
        )
      ).toHaveClass('active');
      expect(
        host.query(
          '.cdk-overlay-container .cdk-overlay-connected-position-bounding-box:nth-child(2)',
          {
            root: true,
          }
        )
      ).not.toExist();
      host.dispatchKeyboardEvent(host.debugElement, 'keydown', {
        key: 'ArrowRight',
        keyCode: 39,
      });
      expect(
        host.query(
          '.cdk-overlay-container context-menu-content .dropdown-menu.show li:nth-child(4)',
          {
            root: true,
          }
        )
      ).toHaveClass('active');
      expect(
        host.query(
          '.cdk-overlay-container .cdk-overlay-connected-position-bounding-box:nth-child(2)',
          {
            root: true,
          }
        )
      ).toExist();
      host.dispatchKeyboardEvent(host.debugElement, 'keydown', {
        key: 'ArrowLeft',
        keyCode: 37,
      });
    });
  });
});
