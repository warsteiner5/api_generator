/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfBiddingInfoAltDto } from '../../models/api-market-json-result-of-bidding-info';

export interface BiddingGetInfo$Params {
  tradeId: number;
}

export function biddingGetInfo(http: HttpClient, rootUrl: string, params: BiddingGetInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBiddingInfoAltDto>> {
  const rb = new RequestBuilder(rootUrl, biddingGetInfo.PATH, 'get');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfBiddingInfoAltDto>;
    })
  );
}

biddingGetInfo.PATH = '/market/api/v1/bidding/trade/{tradeId}';
