import { VapiEntityBase } from '../VapiEntityBase';
import type { VapiSDK } from '../VapiSDK';
import type { Control } from '../types';
import type { PhoneNumber, PhoneNumberLoadMatch, PhoneNumberListMatch, PhoneNumberCreateData, PhoneNumberUpdateData, PhoneNumberRemoveMatch } from '../VapiTypes';
declare class PhoneNumberEntity extends VapiEntityBase<PhoneNumber> {
    constructor(client: VapiSDK, entopts: any);
    make(this: PhoneNumberEntity): PhoneNumberEntity;
    load(this: any, reqmatch?: PhoneNumberLoadMatch, ctrl?: Control): Promise<PhoneNumberEntity>;
    list(this: any, reqmatch?: PhoneNumberListMatch, ctrl?: Control): Promise<PhoneNumberEntity[]>;
    create(this: any, reqdata?: PhoneNumberCreateData, ctrl?: Control): Promise<PhoneNumberEntity>;
    update(this: any, reqdata?: PhoneNumberUpdateData, ctrl?: Control): Promise<PhoneNumberEntity>;
    remove(this: any, reqmatch?: PhoneNumberRemoveMatch, ctrl?: Control): Promise<PhoneNumberEntity>;
}
export { PhoneNumberEntity };
