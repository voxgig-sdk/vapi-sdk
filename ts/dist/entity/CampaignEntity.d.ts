import { VapiEntityBase } from '../VapiEntityBase';
import type { VapiSDK } from '../VapiSDK';
import type { Control } from '../types';
import type { Campaign, CampaignLoadMatch, CampaignListMatch, CampaignCreateData, CampaignUpdateData, CampaignRemoveMatch } from '../VapiTypes';
declare class CampaignEntity extends VapiEntityBase<Campaign> {
    constructor(client: VapiSDK, entopts: any);
    make(this: CampaignEntity): CampaignEntity;
    load(this: any, reqmatch?: CampaignLoadMatch, ctrl?: Control): Promise<CampaignEntity>;
    list(this: any, reqmatch?: CampaignListMatch, ctrl?: Control): Promise<CampaignEntity[]>;
    create(this: any, reqdata?: CampaignCreateData, ctrl?: Control): Promise<CampaignEntity>;
    update(this: any, reqdata?: CampaignUpdateData, ctrl?: Control): Promise<CampaignEntity>;
    remove(this: any, reqmatch?: CampaignRemoveMatch, ctrl?: Control): Promise<CampaignEntity>;
}
export { CampaignEntity };
