/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';

export interface PriceListsChangePriceListState$Params {
  id: number;
  state: number;
}

export function priceListsChangePriceListState(http: HttpClient, rootUrl: string, params: PriceListsChangePriceListState$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, priceListsChangePriceListState.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('state', params.state, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonVoidResultAltDto>;
    })
  );
}

priceListsChangePriceListState.PATH = '/market/api/v1/priceLists/{id}/changeState/{state}';
