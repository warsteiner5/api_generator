/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfBiddingInfo } from '../../models/api-market-json-result-of-bidding-info';

export interface BiddingGetInfo$Params {
  tradeId: number;
}

export function biddingGetInfo(http: HttpClient, rootUrl: string, params: BiddingGetInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBiddingInfo>> {
  const rb = new RequestBuilder(rootUrl, biddingGetInfo.PATH, 'get');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfBiddingInfo>;
    })
  );
}

biddingGetInfo.PATH = '/bla-bla-vla/bidding/trade/{tradeId}';
