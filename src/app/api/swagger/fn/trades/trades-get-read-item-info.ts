/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfDictionaryOfIntegerAndListOfReadItemInfoAltDto } from '../../models/api-market-json-result-of-dictionary-of-integer-and-list-of-read-item-info';

export interface TradesGetReadItemInfo$Params {
  id: number;
  itemId: number;
}

export function tradesGetReadItemInfo(http: HttpClient, rootUrl: string, params: TradesGetReadItemInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDictionaryOfIntegerAndListOfReadItemInfoAltDto>> {
  const rb = new RequestBuilder(rootUrl, tradesGetReadItemInfo.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('itemId', params.itemId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfDictionaryOfIntegerAndListOfReadItemInfoAltDto>;
    })
  );
}

tradesGetReadItemInfo.PATH = '/market/api/v1/trades/{id}/chat/{itemId}/who';
