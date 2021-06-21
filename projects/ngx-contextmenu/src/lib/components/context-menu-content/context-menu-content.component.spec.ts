import { OverlayModule } from '@angular/cdk/overlay';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContextMenuService } from '../../services/context-menu/context-menu.service';
import { ContextMenuContentComponent } from './context-menu-content.component';

describe('ContextMenuContentComponent', () => {
  let component: ContextMenuContentComponent;
  let fixture: ComponentFixture<ContextMenuContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverlayModule],
      providers: [ContextMenuService],
      declarations: [ContextMenuContentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextMenuContentComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
