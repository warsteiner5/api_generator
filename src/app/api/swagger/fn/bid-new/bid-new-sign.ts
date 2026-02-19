/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfSignBidResponseAltDto } from '../../models/api-market-json-result-of-sign-bid-response';
import { ApiSignBidRequestNewAltDto } from '../../models/api-sign-bid-request-new';

export interface BidNewSign$Params {
      body?: ApiSignBidRequestNewAltDto | null
}

export function bidNewSign(http: HttpClient, rootUrl: string, params?: BidNewSign$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfSignBidResponseAltDto>> {
  const rb = new RequestBuilder(rootUrl, bidNewSign.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfSignBidResponseAltDto>;
    })
  );
}

bidNewSign.PATH = '/market/api/v1/bid-new/sign';
