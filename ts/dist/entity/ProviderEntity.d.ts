import { VapiEntityBase } from '../VapiEntityBase';
import type { VapiSDK } from '../VapiSDK';
import type { Control } from '../types';
import type { Provider, ProviderLoadMatch, ProviderCreateData, ProviderUpdateData, ProviderRemoveMatch } from '../VapiTypes';
declare class ProviderEntity extends VapiEntityBase<Provider> {
    constructor(client: VapiSDK, entopts: any);
    make(this: ProviderEntity): ProviderEntity;
    load(this: any, reqmatch?: ProviderLoadMatch, ctrl?: Control): Promise<ProviderEntity>;
    create(this: any, reqdata?: ProviderCreateData, ctrl?: Control): Promise<ProviderEntity>;
    update(this: any, reqdata?: ProviderUpdateData, ctrl?: Control): Promise<ProviderEntity>;
    remove(this: any, reqmatch?: ProviderRemoveMatch, ctrl?: Control): Promise<ProviderEntity>;
}
export { ProviderEntity };
