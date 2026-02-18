/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfDictionaryOfIntegerAndInteger } from '../../models/api-market-json-result-of-dictionary-of-integer-and-integer';

export interface TradesGetChatsUnreadItems$Params {
  id: number;
}

export function tradesGetChatsUnreadItems(http: HttpClient, rootUrl: string, params: TradesGetChatsUnreadItems$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDictionaryOfIntegerAndInteger>> {
  const rb = new RequestBuilder(rootUrl, tradesGetChatsUnreadItems.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfDictionaryOfIntegerAndInteger>;
    })
  );
}

tradesGetChatsUnreadItems.PATH = '/bla-bla-vla/trades/{id}/chat/unread';
