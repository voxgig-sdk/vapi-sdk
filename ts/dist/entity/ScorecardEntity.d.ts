import { VapiEntityBase } from '../VapiEntityBase';
import type { VapiSDK } from '../VapiSDK';
import type { Control } from '../types';
import type { Scorecard, ScorecardLoadMatch, ScorecardListMatch, ScorecardCreateData, ScorecardUpdateData, ScorecardRemoveMatch } from '../VapiTypes';
declare class ScorecardEntity extends VapiEntityBase<Scorecard> {
    constructor(client: VapiSDK, entopts: any);
    make(this: ScorecardEntity): ScorecardEntity;
    load(this: any, reqmatch?: ScorecardLoadMatch, ctrl?: Control): Promise<ScorecardEntity>;
    list(this: any, reqmatch?: ScorecardListMatch, ctrl?: Control): Promise<ScorecardEntity[]>;
    create(this: any, reqdata?: ScorecardCreateData, ctrl?: Control): Promise<ScorecardEntity>;
    update(this: any, reqdata?: ScorecardUpdateData, ctrl?: Control): Promise<ScorecardEntity>;
    remove(this: any, reqmatch?: ScorecardRemoveMatch, ctrl?: Control): Promise<ScorecardEntity>;
}
export { ScorecardEntity };
