/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMzPriceListDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-mz-price-list-dto';
import { ApiSearchObjectAltDto } from '../../models/api-search-object';

export interface PriceListsGetPaginatedPriceLists$Params {
      body?: ApiSearchObjectAltDto | null
}

export function priceListsGetPaginatedPriceLists(http: HttpClient, rootUrl: string, params?: PriceListsGetPaginatedPriceLists$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMzPriceListDto>> {
  const rb = new RequestBuilder(rootUrl, priceListsGetPaginatedPriceLists.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMzPriceListDto>;
    })
  );
}

priceListsGetPaginatedPriceLists.PATH = '/bla-bla-vla/priceLists/my';
