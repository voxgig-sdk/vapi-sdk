import { VapiEntityBase } from '../VapiEntityBase';
import type { VapiSDK } from '../VapiSDK';
import type { Control } from '../types';
import type { Tool, ToolLoadMatch, ToolListMatch, ToolCreateData, ToolUpdateData, ToolRemoveMatch } from '../VapiTypes';
declare class ToolEntity extends VapiEntityBase<Tool> {
    constructor(client: VapiSDK, entopts: any);
    make(this: ToolEntity): ToolEntity;
    load(this: any, reqmatch?: ToolLoadMatch, ctrl?: Control): Promise<ToolEntity>;
    list(this: any, reqmatch?: ToolListMatch, ctrl?: Control): Promise<ToolEntity[]>;
    create(this: any, reqdata?: ToolCreateData, ctrl?: Control): Promise<ToolEntity>;
    update(this: any, reqdata?: ToolUpdateData, ctrl?: Control): Promise<ToolEntity>;
    remove(this: any, reqmatch?: ToolRemoveMatch, ctrl?: Control): Promise<ToolEntity>;
}
export { ToolEntity };
