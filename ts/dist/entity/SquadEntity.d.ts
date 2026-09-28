import { VapiEntityBase } from '../VapiEntityBase';
import type { VapiSDK } from '../VapiSDK';
import type { Control } from '../types';
import type { Squad, SquadLoadMatch, SquadListMatch, SquadCreateData, SquadUpdateData, SquadRemoveMatch } from '../VapiTypes';
declare class SquadEntity extends VapiEntityBase<Squad> {
    constructor(client: VapiSDK, entopts: any);
    make(this: SquadEntity): SquadEntity;
    load(this: any, reqmatch?: SquadLoadMatch, ctrl?: Control): Promise<SquadEntity>;
    list(this: any, reqmatch?: SquadListMatch, ctrl?: Control): Promise<SquadEntity[]>;
    create(this: any, reqdata?: SquadCreateData, ctrl?: Control): Promise<SquadEntity>;
    update(this: any, reqdata?: SquadUpdateData, ctrl?: Control): Promise<SquadEntity>;
    remove(this: any, reqmatch?: SquadRemoveMatch, ctrl?: Control): Promise<SquadEntity>;
}
export { SquadEntity };
