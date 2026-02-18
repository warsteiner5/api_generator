/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiDiscussionFileDto } from '../../models/api-discussion-file-dto';

export interface TradesGetChatFiles$Params {
  chatId: number;
}

export function tradesGetChatFiles(http: HttpClient, rootUrl: string, params: TradesGetChatFiles$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ApiDiscussionFileDto>>> {
  const rb = new RequestBuilder(rootUrl, tradesGetChatFiles.PATH, 'get');
  if (params) {
    rb.path('chatId', params.chatId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ApiDiscussionFileDto>>;
    })
  );
}

tradesGetChatFiles.PATH = '/bla-bla-vla/trades/chat/{chatId}/files';
