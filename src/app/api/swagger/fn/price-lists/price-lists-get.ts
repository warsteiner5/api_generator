/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMzPriceListDto } from '../../models/api-market-json-result-of-mz-price-list-dto';

export interface PriceListsGet$Params {
  id: number;
}

export function priceListsGet(http: HttpClient, rootUrl: string, params: PriceListsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMzPriceListDto>> {
  const rb = new RequestBuilder(rootUrl, priceListsGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMzPriceListDto>;
    })
  );
}

priceListsGet.PATH = '/bla-bla-vla/priceLists/{id}';
