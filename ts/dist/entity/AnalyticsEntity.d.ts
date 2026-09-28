import { VapiEntityBase } from '../VapiEntityBase';
import type { VapiSDK } from '../VapiSDK';
import type { Control } from '../types';
import type { Analytics, AnalyticsCreateData } from '../VapiTypes';
declare class AnalyticsEntity extends VapiEntityBase<Analytics> {
    constructor(client: VapiSDK, entopts: any);
    make(this: AnalyticsEntity): AnalyticsEntity;
    create(this: any, reqdata?: AnalyticsCreateData, ctrl?: Control): Promise<AnalyticsEntity>;
}
export { AnalyticsEntity };
