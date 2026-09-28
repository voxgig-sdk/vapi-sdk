import { VapiEntityBase } from '../VapiEntityBase';
import type { VapiSDK } from '../VapiSDK';
import type { Control } from '../types';
import type { Session, SessionLoadMatch, SessionListMatch, SessionCreateData, SessionUpdateData, SessionRemoveMatch } from '../VapiTypes';
declare class SessionEntity extends VapiEntityBase<Session> {
    constructor(client: VapiSDK, entopts: any);
    make(this: SessionEntity): SessionEntity;
    load(this: any, reqmatch?: SessionLoadMatch, ctrl?: Control): Promise<SessionEntity>;
    list(this: any, reqmatch?: SessionListMatch, ctrl?: Control): Promise<SessionEntity[]>;
    create(this: any, reqdata?: SessionCreateData, ctrl?: Control): Promise<SessionEntity>;
    update(this: any, reqdata?: SessionUpdateData, ctrl?: Control): Promise<SessionEntity>;
    remove(this: any, reqmatch?: SessionRemoveMatch, ctrl?: Control): Promise<SessionEntity>;
}
export { SessionEntity };
