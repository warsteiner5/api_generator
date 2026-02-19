/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketDealAltDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-market-deal';
import { ApiSearchObjectAltDto } from '../../models/api-search-object';

export interface TradesGetDealsList$Params {
      body?: ApiSearchObjectAltDto | null
}

export function tradesGetDealsList(http: HttpClient, rootUrl: string, params?: TradesGetDealsList$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketDealAltDto>> {
  const rb = new RequestBuilder(rootUrl, tradesGetDealsList.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketDealAltDto>;
    })
  );
}

tradesGetDealsList.PATH = '/market/api/v1/trades/deals';
