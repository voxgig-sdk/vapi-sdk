import { VapiEntityBase } from '../VapiEntityBase';
import type { VapiSDK } from '../VapiSDK';
import type { Control } from '../types';
import type { Insight, InsightLoadMatch, InsightListMatch, InsightCreateData, InsightUpdateData, InsightRemoveMatch } from '../VapiTypes';
declare class InsightEntity extends VapiEntityBase<Insight> {
    constructor(client: VapiSDK, entopts: any);
    make(this: InsightEntity): InsightEntity;
    load(this: any, reqmatch?: InsightLoadMatch, ctrl?: Control): Promise<InsightEntity>;
    list(this: any, reqmatch?: InsightListMatch, ctrl?: Control): Promise<InsightEntity[]>;
    create(this: any, reqdata?: InsightCreateData, ctrl?: Control): Promise<InsightEntity>;
    update(this: any, reqdata?: InsightUpdateData, ctrl?: Control): Promise<InsightEntity>;
    remove(this: any, reqmatch?: InsightRemoveMatch, ctrl?: Control): Promise<InsightEntity>;
}
export { InsightEntity };
