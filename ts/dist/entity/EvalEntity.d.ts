import { VapiEntityBase } from '../VapiEntityBase';
import type { VapiSDK } from '../VapiSDK';
import type { Control } from '../types';
import type { Eval, EvalLoadMatch, EvalListMatch, EvalCreateData, EvalUpdateData, EvalRemoveMatch } from '../VapiTypes';
declare class EvalEntity extends VapiEntityBase<Eval> {
    constructor(client: VapiSDK, entopts: any);
    make(this: EvalEntity): EvalEntity;
    load(this: any, reqmatch?: EvalLoadMatch, ctrl?: Control): Promise<EvalEntity>;
    list(this: any, reqmatch?: EvalListMatch, ctrl?: Control): Promise<EvalEntity[]>;
    create(this: any, reqdata?: EvalCreateData, ctrl?: Control): Promise<EvalEntity>;
    update(this: any, reqdata?: EvalUpdateData, ctrl?: Control): Promise<EvalEntity>;
    remove(this: any, reqmatch?: EvalRemoveMatch, ctrl?: Control): Promise<EvalEntity>;
}
export { EvalEntity };
