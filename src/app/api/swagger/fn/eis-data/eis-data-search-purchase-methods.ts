/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfIReadOnlyCollectionOfEisDictionaryItemAltDto } from '../../models/api-market-json-result-of-i-read-only-collection-of-eis-dictionary-item';

export interface EisDataSearchPurchaseMethods$Params {
  tradeId: number;
}

export function eisDataSearchPurchaseMethods(http: HttpClient, rootUrl: string, params: EisDataSearchPurchaseMethods$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfEisDictionaryItemAltDto>> {
  const rb = new RequestBuilder(rootUrl, eisDataSearchPurchaseMethods.PATH, 'get');
  if (params) {
    rb.query('tradeId', params.tradeId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfEisDictionaryItemAltDto>;
    })
  );
}

eisDataSearchPurchaseMethods.PATH = '/market/api/v1/eis/data/purchase-methods';
