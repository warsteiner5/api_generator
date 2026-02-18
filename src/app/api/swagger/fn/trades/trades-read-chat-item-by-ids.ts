/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfBoolean } from '../../models/api-market-json-result-of-boolean';

export interface TradesReadChatItemByIds$Params {
  id: number;
  chatId: number;
      body?: Array<number> | null
}

export function tradesReadChatItemByIds(http: HttpClient, rootUrl: string, params: TradesReadChatItemByIds$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
  const rb = new RequestBuilder(rootUrl, tradesReadChatItemByIds.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('chatId', params.chatId, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfBoolean>;
    })
  );
}

tradesReadChatItemByIds.PATH = '/bla-bla-vla/trades/{id}/chat/{chatId}/read';
