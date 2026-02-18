/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfBoolean } from '../../models/api-market-json-result-of-boolean';

export interface TradesReadAllItemsFromId$Params {
  id: number;
  chatId: number;
  itemId: number;
}

export function tradesReadAllItemsFromId(http: HttpClient, rootUrl: string, params: TradesReadAllItemsFromId$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
  const rb = new RequestBuilder(rootUrl, tradesReadAllItemsFromId.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('chatId', params.chatId, {});
    rb.path('itemId', params.itemId, {});
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

tradesReadAllItemsFromId.PATH = '/bla-bla-vla/trades/{id}/chat/{chatId}/read/{itemId}/all';
