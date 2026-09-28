import { VapiEntityBase } from '../VapiEntityBase';
import type { VapiSDK } from '../VapiSDK';
import type { Control } from '../types';
import type { KnowledgeBaseV2File, KnowledgeBaseV2FileListMatch, KnowledgeBaseV2FileCreateData, KnowledgeBaseV2FileRemoveMatch } from '../VapiTypes';
declare class KnowledgeBaseV2FileEntity extends VapiEntityBase<KnowledgeBaseV2File> {
    constructor(client: VapiSDK, entopts: any);
    make(this: KnowledgeBaseV2FileEntity): KnowledgeBaseV2FileEntity;
    list(this: any, reqmatch?: KnowledgeBaseV2FileListMatch, ctrl?: Control): Promise<KnowledgeBaseV2FileEntity[]>;
    create(this: any, reqdata?: KnowledgeBaseV2FileCreateData, ctrl?: Control): Promise<KnowledgeBaseV2FileEntity>;
    remove(this: any, reqmatch?: KnowledgeBaseV2FileRemoveMatch, ctrl?: Control): Promise<KnowledgeBaseV2FileEntity>;
}
export { KnowledgeBaseV2FileEntity };
