import { VapiEntityBase } from '../VapiEntityBase';
import type { VapiSDK } from '../VapiSDK';
import type { Control } from '../types';
import type { SimulationRun, SimulationRunLoadMatch, SimulationRunUpdateData } from '../VapiTypes';
declare class SimulationRunEntity extends VapiEntityBase<SimulationRun> {
    constructor(client: VapiSDK, entopts: any);
    make(this: SimulationRunEntity): SimulationRunEntity;
    load(this: any, reqmatch?: SimulationRunLoadMatch, ctrl?: Control): Promise<SimulationRunEntity>;
    update(this: any, reqdata?: SimulationRunUpdateData, ctrl?: Control): Promise<SimulationRunEntity>;
}
export { SimulationRunEntity };
