import { VapiEntityBase } from '../VapiEntityBase';
import type { VapiSDK } from '../VapiSDK';
import type { Control } from '../types';
import type { Chat, ChatLoadMatch, ChatListMatch, ChatCreateData, ChatRemoveMatch } from '../VapiTypes';
declare class ChatEntity extends VapiEntityBase<Chat> {
    constructor(client: VapiSDK, entopts: any);
    make(this: ChatEntity): ChatEntity;
    load(this: any, reqmatch?: ChatLoadMatch, ctrl?: Control): Promise<ChatEntity>;
    list(this: any, reqmatch?: ChatListMatch, ctrl?: Control): Promise<ChatEntity[]>;
    create(this: any, reqdata?: ChatCreateData, ctrl?: Control): Promise<ChatEntity>;
    remove(this: any, reqmatch?: ChatRemoveMatch, ctrl?: Control): Promise<ChatEntity>;
}
export { ChatEntity };
