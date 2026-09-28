import { VapiEntityBase } from '../VapiEntityBase';
import type { VapiSDK } from '../VapiSDK';
import type { Control } from '../types';
import type { SimulationSuite, SimulationSuiteLoadMatch, SimulationSuiteListMatch, SimulationSuiteCreateData, SimulationSuiteUpdateData, SimulationSuiteRemoveMatch } from '../VapiTypes';
declare class SimulationSuiteEntity extends VapiEntityBase<SimulationSuite> {
    constructor(client: VapiSDK, entopts: any);
    make(this: SimulationSuiteEntity): SimulationSuiteEntity;
    load(this: any, reqmatch?: SimulationSuiteLoadMatch, ctrl?: Control): Promise<SimulationSuiteEntity>;
    list(this: any, reqmatch?: SimulationSuiteListMatch, ctrl?: Control): Promise<SimulationSuiteEntity[]>;
    create(this: any, reqdata?: SimulationSuiteCreateData, ctrl?: Control): Promise<SimulationSuiteEntity>;
    update(this: any, reqdata?: SimulationSuiteUpdateData, ctrl?: Control): Promise<SimulationSuiteEntity>;
    remove(this: any, reqmatch?: SimulationSuiteRemoveMatch, ctrl?: Control): Promise<SimulationSuiteEntity>;
}
export { SimulationSuiteEntity };
