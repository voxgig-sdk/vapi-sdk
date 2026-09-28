import { VapiEntityBase } from '../VapiEntityBase';
import type { VapiSDK } from '../VapiSDK';
import type { Control } from '../types';
import type { Simulation, SimulationLoadMatch, SimulationListMatch, SimulationCreateData, SimulationUpdateData, SimulationRemoveMatch } from '../VapiTypes';
declare class SimulationEntity extends VapiEntityBase<Simulation> {
    constructor(client: VapiSDK, entopts: any);
    make(this: SimulationEntity): SimulationEntity;
    load(this: any, reqmatch?: SimulationLoadMatch, ctrl?: Control): Promise<SimulationEntity>;
    list(this: any, reqmatch?: SimulationListMatch, ctrl?: Control): Promise<SimulationEntity[]>;
    create(this: any, reqdata?: SimulationCreateData, ctrl?: Control): Promise<SimulationEntity>;
    update(this: any, reqdata?: SimulationUpdateData, ctrl?: Control): Promise<SimulationEntity>;
    remove(this: any, reqmatch?: SimulationRemoveMatch, ctrl?: Control): Promise<SimulationEntity>;
}
export { SimulationEntity };
