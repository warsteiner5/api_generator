/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfSignBidResponse } from '../../models/api-market-json-result-of-sign-bid-response';
import { ApiSignBidRequestAltDto } from '../../models/api-sign-bid-request';

export interface BidSign$Params {
      body?: ApiSignBidRequestAltDto | null
}

export function bidSign(http: HttpClient, rootUrl: string, params?: BidSign$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfSignBidResponse>> {
  const rb = new RequestBuilder(rootUrl, bidSign.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfSignBidResponse>;
    })
  );
}

bidSign.PATH = '/bla-bla-vla/bid/sign';
