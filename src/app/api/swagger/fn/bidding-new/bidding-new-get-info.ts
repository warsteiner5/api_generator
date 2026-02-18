/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfBiddingInfo } from '../../models/api-market-json-result-of-bidding-info';

export interface BiddingNewGetInfo$Params {
  tradeGuid: string;
}

export function biddingNewGetInfo(http: HttpClient, rootUrl: string, params: BiddingNewGetInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBiddingInfo>> {
  const rb = new RequestBuilder(rootUrl, biddingNewGetInfo.PATH, 'get');
  if (params) {
    rb.path('tradeGuid', params.tradeGuid, {});
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

biddingNewGetInfo.PATH = '/bla-bla-vla/bidding-new/trade/{tradeGuid}';
