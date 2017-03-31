import { ContextMenuContentComponent } from './contextMenuContent.component';
import { Injectable } from '@angular/core';
import { InjectionService } from './injection/injection.service';
import { InjectionRegistry } from './injection/injection-registry.service';

@Injectable()
export class ContextMenuInjectorService extends InjectionRegistry {

  type: any = ContextMenuContentComponent;

  constructor(public injectionService: InjectionService) {
    super(injectionService);
  }

}
