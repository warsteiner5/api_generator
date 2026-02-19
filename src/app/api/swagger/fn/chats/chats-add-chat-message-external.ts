/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiAddChatMessageRequestAltDto } from '../../models/api-add-chat-message-request';

export interface ChatsAddChatMessageExternal$Params {
  chatId: number;
      body?: ApiAddChatMessageRequestAltDto | null
}

export function chatsAddChatMessageExternal(http: HttpClient, rootUrl: string, params: ChatsAddChatMessageExternal$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, chatsAddChatMessageExternal.PATH, 'post');
  if (params) {
    rb.path('chatId', params.chatId, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: 'application/octet-stream', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Blob>;
    })
  );
}

chatsAddChatMessageExternal.PATH = '/market/api/v1/chats/{chatId}/external';
