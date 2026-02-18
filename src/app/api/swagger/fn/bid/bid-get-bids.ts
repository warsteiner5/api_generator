/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketPaginationResultOfBidInfoOf } from '../../models/api-market-json-result-of-market-pagination-result-of-bid-info-of';

export interface BidGetBids$Params {
  tradeId: number;
  pageNumber: number;
  pageSize: number;
}

export function bidGetBids(http: HttpClient, rootUrl: string, params: BidGetBids$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfBidInfoOf>> {
  const rb = new RequestBuilder(rootUrl, bidGetBids.PATH, 'get');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
    rb.query('pageNumber', params.pageNumber, {});
    rb.query('pageSize', params.pageSize, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfBidInfoOf>;
    })
  );
}

bidGetBids.PATH = '/bla-bla-vla/bid/trade/{tradeId}';
