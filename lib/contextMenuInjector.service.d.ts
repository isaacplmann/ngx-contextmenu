import { InjectionService } from './injection/injection.service';
import { InjectionRegistry } from './injection/injection-registry.service';
export declare class ContextMenuInjectorService extends InjectionRegistry {
    injectionService: InjectionService;
    type: any;
    constructor(injectionService: InjectionService);
}
