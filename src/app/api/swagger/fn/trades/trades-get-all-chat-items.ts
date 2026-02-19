/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfDiscussionDto } from '../../models/api-market-json-result-of-list-of-discussion-dto';

export interface TradesGetAllChatItems$Params {
  id: number;
  chatId: number;
  chatItemId: number | null;
}

export function tradesGetAllChatItems(http: HttpClient, rootUrl: string, params: TradesGetAllChatItems$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfDiscussionDto>> {
  const rb = new RequestBuilder(rootUrl, tradesGetAllChatItems.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('chatId', params.chatId, {});
    rb.query('chatItemId', params.chatItemId, {});
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

tradesGetAllChatItems.PATH = '/market/api/v1/trades/{id}/chat/{chatId}/items';
