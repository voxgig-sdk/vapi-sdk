import { VapiEntityBase } from '../VapiEntityBase';
import type { VapiSDK } from '../VapiSDK';
import type { Control } from '../types';
import type { Assistant, AssistantLoadMatch, AssistantListMatch, AssistantCreateData, AssistantUpdateData, AssistantRemoveMatch } from '../VapiTypes';
declare class AssistantEntity extends VapiEntityBase<Assistant> {
    constructor(client: VapiSDK, entopts: any);
    make(this: AssistantEntity): AssistantEntity;
    load(this: any, reqmatch?: AssistantLoadMatch, ctrl?: Control): Promise<AssistantEntity>;
    list(this: any, reqmatch?: AssistantListMatch, ctrl?: Control): Promise<AssistantEntity[]>;
    create(this: any, reqdata?: AssistantCreateData, ctrl?: Control): Promise<AssistantEntity>;
    update(this: any, reqdata?: AssistantUpdateData, ctrl?: Control): Promise<AssistantEntity>;
    remove(this: any, reqmatch?: AssistantRemoveMatch, ctrl?: Control): Promise<AssistantEntity>;
}
export { AssistantEntity };
