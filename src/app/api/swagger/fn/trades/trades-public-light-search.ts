/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-market-search-result-dto';
import { ApiSearchObjectAltDto } from '../../models/api-search-object';

export interface TradesPublicLightSearch$Params {
  totalCount: number;
      body?: ApiSearchObjectAltDto | null
}

export function tradesPublicLightSearch(http: HttpClient, rootUrl: string, params: TradesPublicLightSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto>> {
  const rb = new RequestBuilder(rootUrl, tradesPublicLightSearch.PATH, 'post');
  if (params) {
    rb.query('totalCount', params.totalCount, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto>;
    })
  );
}

tradesPublicLightSearch.PATH = '/market/api/v1/trades/public-light-search';
