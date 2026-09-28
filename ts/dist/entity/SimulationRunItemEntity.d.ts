import { VapiEntityBase } from '../VapiEntityBase';
import type { VapiSDK } from '../VapiSDK';
import type { Control } from '../types';
import type { SimulationRunItem, SimulationRunItemLoadMatch, SimulationRunItemListMatch, SimulationRunItemCreateData, SimulationRunItemUpdateData } from '../VapiTypes';
declare class SimulationRunItemEntity extends VapiEntityBase<SimulationRunItem> {
    constructor(client: VapiSDK, entopts: any);
    make(this: SimulationRunItemEntity): SimulationRunItemEntity;
    load(this: any, reqmatch?: SimulationRunItemLoadMatch, ctrl?: Control): Promise<SimulationRunItemEntity>;
    list(this: any, reqmatch?: SimulationRunItemListMatch, ctrl?: Control): Promise<SimulationRunItemEntity[]>;
    create(this: any, reqdata?: SimulationRunItemCreateData, ctrl?: Control): Promise<SimulationRunItemEntity>;
    update(this: any, reqdata?: SimulationRunItemUpdateData, ctrl?: Control): Promise<SimulationRunItemEntity>;
}
export { SimulationRunItemEntity };
