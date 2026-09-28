import { VapiEntityBase } from '../VapiEntityBase';
import type { VapiSDK } from '../VapiSDK';
import type { Control } from '../types';
import type { Personality, PersonalityLoadMatch, PersonalityListMatch, PersonalityCreateData, PersonalityUpdateData, PersonalityRemoveMatch } from '../VapiTypes';
declare class PersonalityEntity extends VapiEntityBase<Personality> {
    constructor(client: VapiSDK, entopts: any);
    make(this: PersonalityEntity): PersonalityEntity;
    load(this: any, reqmatch?: PersonalityLoadMatch, ctrl?: Control): Promise<PersonalityEntity>;
    list(this: any, reqmatch?: PersonalityListMatch, ctrl?: Control): Promise<PersonalityEntity[]>;
    create(this: any, reqdata?: PersonalityCreateData, ctrl?: Control): Promise<PersonalityEntity>;
    update(this: any, reqdata?: PersonalityUpdateData, ctrl?: Control): Promise<PersonalityEntity>;
    remove(this: any, reqmatch?: PersonalityRemoveMatch, ctrl?: Control): Promise<PersonalityEntity>;
}
export { PersonalityEntity };
