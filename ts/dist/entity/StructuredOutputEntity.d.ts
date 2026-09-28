import { VapiEntityBase } from '../VapiEntityBase';
import type { VapiSDK } from '../VapiSDK';
import type { Control } from '../types';
import type { StructuredOutput, StructuredOutputLoadMatch, StructuredOutputListMatch, StructuredOutputCreateData, StructuredOutputUpdateData, StructuredOutputRemoveMatch } from '../VapiTypes';
declare class StructuredOutputEntity extends VapiEntityBase<StructuredOutput> {
    constructor(client: VapiSDK, entopts: any);
    make(this: StructuredOutputEntity): StructuredOutputEntity;
    load(this: any, reqmatch?: StructuredOutputLoadMatch, ctrl?: Control): Promise<StructuredOutputEntity>;
    list(this: any, reqmatch?: StructuredOutputListMatch, ctrl?: Control): Promise<StructuredOutputEntity[]>;
    create(this: any, reqdata?: StructuredOutputCreateData, ctrl?: Control): Promise<StructuredOutputEntity>;
    update(this: any, reqdata?: StructuredOutputUpdateData, ctrl?: Control): Promise<StructuredOutputEntity>;
    remove(this: any, reqmatch?: StructuredOutputRemoveMatch, ctrl?: Control): Promise<StructuredOutputEntity>;
}
export { StructuredOutputEntity };
