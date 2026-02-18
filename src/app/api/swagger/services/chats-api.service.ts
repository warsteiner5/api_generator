/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { chatsAddChatMessage } from '../fn/chats/chats-add-chat-message';
import { ChatsAddChatMessage$Params } from '../fn/chats/chats-add-chat-message';
import { chatsAddChatMessageExternal } from '../fn/chats/chats-add-chat-message-external';
import { ChatsAddChatMessageExternal$Params } from '../fn/chats/chats-add-chat-message-external';

@Injectable({ providedIn: 'root' })
export class ChatsApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `chatsAddChatMessage()` */
  static readonly ChatsAddChatMessagePath = '/bla-bla-vla/chats/{chatId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `chatsAddChatMessage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  chatsAddChatMessage$Response(params: ChatsAddChatMessage$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return chatsAddChatMessage(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `chatsAddChatMessage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  chatsAddChatMessage(params: ChatsAddChatMessage$Params, context?: HttpContext): Observable<Blob> {
    return this.chatsAddChatMessage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `chatsAddChatMessageExternal()` */
  static readonly ChatsAddChatMessageExternalPath = '/bla-bla-vla/chats/{chatId}/external';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `chatsAddChatMessageExternal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  chatsAddChatMessageExternal$Response(params: ChatsAddChatMessageExternal$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return chatsAddChatMessageExternal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `chatsAddChatMessageExternal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  chatsAddChatMessageExternal(params: ChatsAddChatMessageExternal$Params, context?: HttpContext): Observable<Blob> {
    return this.chatsAddChatMessageExternal$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}
