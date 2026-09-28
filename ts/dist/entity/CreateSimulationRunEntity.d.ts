import { VapiEntityBase } from '../VapiEntityBase';
import type { VapiSDK } from '../VapiSDK';
import type { Control } from '../types';
import type { CreateSimulationRun, CreateSimulationRunCreateData } from '../VapiTypes';
declare class CreateSimulationRunEntity extends VapiEntityBase<CreateSimulationRun> {
    constructor(client: VapiSDK, entopts: any);
    make(this: CreateSimulationRunEntity): CreateSimulationRunEntity;
    create(this: any, reqdata?: CreateSimulationRunCreateData, ctrl?: Control): Promise<CreateSimulationRunEntity>;
}
export { CreateSimulationRunEntity };
