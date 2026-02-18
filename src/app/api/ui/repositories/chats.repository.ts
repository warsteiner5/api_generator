import { ChatsAddChatMessageExternalParams, chatsAddChatMessageExternalParamsAdapter } from './params/chats-add-chat-message-external.params';
import { ChatsAddChatMessageParams, chatsAddChatMessageParamsAdapter } from './params/chats-add-chat-message.params';
import { ChatsApiService } from '../../swagger/services/chats-api.service';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChatsRepository {
  private readonly _api = inject(ChatsApiService);

  chatsAddChatMessage(params: ChatsAddChatMessageParams): Observable<Blob> {
    return this._api.chatsAddChatMessage(chatsAddChatMessageParamsAdapter.adapt(params));
  }

  chatsAddChatMessageExternal(params: ChatsAddChatMessageExternalParams): Observable<Blob> {
    return this._api.chatsAddChatMessageExternal(chatsAddChatMessageExternalParamsAdapter.adapt(params));
  }

}
