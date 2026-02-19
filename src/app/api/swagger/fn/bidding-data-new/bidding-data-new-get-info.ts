/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfCompletedBiddingInfoAltDto } from '../../models/api-market-json-result-of-completed-bidding-info';

export interface BiddingDataNewGetInfo$Params {
  tradeGuid: string;
}

export function biddingDataNewGetInfo(http: HttpClient, rootUrl: string, params: BiddingDataNewGetInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCompletedBiddingInfoAltDto>> {
  const rb = new RequestBuilder(rootUrl, biddingDataNewGetInfo.PATH, 'get');
  if (params) {
    rb.path('tradeGuid', params.tradeGuid, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfCompletedBiddingInfoAltDto>;
    })
  );
}

biddingDataNewGetInfo.PATH = '/market/api/v1/bidding-data-new/trade/{tradeGuid}';
