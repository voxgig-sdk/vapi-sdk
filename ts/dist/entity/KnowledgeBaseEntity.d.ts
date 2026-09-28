import { VapiEntityBase } from '../VapiEntityBase';
import type { VapiSDK } from '../VapiSDK';
import type { Control } from '../types';
import type { KnowledgeBase, KnowledgeBaseLoadMatch, KnowledgeBaseListMatch, KnowledgeBaseCreateData, KnowledgeBaseUpdateData, KnowledgeBaseRemoveMatch } from '../VapiTypes';
declare class KnowledgeBaseEntity extends VapiEntityBase<KnowledgeBase> {
    constructor(client: VapiSDK, entopts: any);
    make(this: KnowledgeBaseEntity): KnowledgeBaseEntity;
    load(this: any, reqmatch?: KnowledgeBaseLoadMatch, ctrl?: Control): Promise<KnowledgeBaseEntity>;
    list(this: any, reqmatch?: KnowledgeBaseListMatch, ctrl?: Control): Promise<KnowledgeBaseEntity[]>;
    create(this: any, reqdata?: KnowledgeBaseCreateData, ctrl?: Control): Promise<KnowledgeBaseEntity>;
    update(this: any, reqdata?: KnowledgeBaseUpdateData, ctrl?: Control): Promise<KnowledgeBaseEntity>;
    remove(this: any, reqmatch?: KnowledgeBaseRemoveMatch, ctrl?: Control): Promise<KnowledgeBaseEntity>;
}
export { KnowledgeBaseEntity };
