import { VapiEntityBase } from '../VapiEntityBase';
import type { VapiSDK } from '../VapiSDK';
import type { Control } from '../types';
import type { Call, CallLoadMatch, CallListMatch, CallCreateData, CallUpdateData, CallRemoveMatch } from '../VapiTypes';
declare class CallEntity extends VapiEntityBase<Call> {
    constructor(client: VapiSDK, entopts: any);
    make(this: CallEntity): CallEntity;
    load(this: any, reqmatch?: CallLoadMatch, ctrl?: Control): Promise<CallEntity>;
    list(this: any, reqmatch?: CallListMatch, ctrl?: Control): Promise<CallEntity[]>;
    create(this: any, reqdata?: CallCreateData, ctrl?: Control): Promise<CallEntity>;
    update(this: any, reqdata?: CallUpdateData, ctrl?: Control): Promise<CallEntity>;
    remove(this: any, reqmatch?: CallRemoveMatch, ctrl?: Control): Promise<CallEntity>;
}
export { CallEntity };
