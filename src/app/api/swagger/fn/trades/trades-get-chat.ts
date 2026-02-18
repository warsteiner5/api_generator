/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfDiscussionDto } from '../../models/api-market-json-result-of-list-of-discussion-dto';

export interface TradesGetChat$Params {
  id: number;
  chatId: number;
}

export function tradesGetChat(http: HttpClient, rootUrl: string, params: TradesGetChat$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfDiscussionDto>> {
  const rb = new RequestBuilder(rootUrl, tradesGetChat.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('chatId', params.chatId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfDiscussionDto>;
    })
  );
}

tradesGetChat.PATH = '/bla-bla-vla/trades/{id}/chat/{chatId}';
