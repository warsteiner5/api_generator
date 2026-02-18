/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfDictionaryOfIntegerAndString } from '../../models/api-market-json-result-of-dictionary-of-integer-and-string';

export interface TradesGetChats$Params {
  id: number;
}

export function tradesGetChats(http: HttpClient, rootUrl: string, params: TradesGetChats$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDictionaryOfIntegerAndString>> {
  const rb = new RequestBuilder(rootUrl, tradesGetChats.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfDictionaryOfIntegerAndString>;
    })
  );
}

tradesGetChats.PATH = '/bla-bla-vla/trades/{id}/chats';
