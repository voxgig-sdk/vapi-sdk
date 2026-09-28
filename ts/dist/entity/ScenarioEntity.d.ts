import { VapiEntityBase } from '../VapiEntityBase';
import type { VapiSDK } from '../VapiSDK';
import type { Control } from '../types';
import type { Scenario, ScenarioLoadMatch, ScenarioListMatch, ScenarioCreateData, ScenarioUpdateData, ScenarioRemoveMatch } from '../VapiTypes';
declare class ScenarioEntity extends VapiEntityBase<Scenario> {
    constructor(client: VapiSDK, entopts: any);
    make(this: ScenarioEntity): ScenarioEntity;
    load(this: any, reqmatch?: ScenarioLoadMatch, ctrl?: Control): Promise<ScenarioEntity>;
    list(this: any, reqmatch?: ScenarioListMatch, ctrl?: Control): Promise<ScenarioEntity[]>;
    create(this: any, reqdata?: ScenarioCreateData, ctrl?: Control): Promise<ScenarioEntity>;
    update(this: any, reqdata?: ScenarioUpdateData, ctrl?: Control): Promise<ScenarioEntity>;
    remove(this: any, reqmatch?: ScenarioRemoveMatch, ctrl?: Control): Promise<ScenarioEntity>;
}
export { ScenarioEntity };
