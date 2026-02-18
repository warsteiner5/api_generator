/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfNotTookPlaceLinkValidationResult } from '../../models/api-market-json-result-of-not-took-place-link-validation-result';

export interface TradesNotTookPlaceValidatePossibilityToLink$Params {
  childTradeId: number;
}

export function tradesNotTookPlaceValidatePossibilityToLink(http: HttpClient, rootUrl: string, params: TradesNotTookPlaceValidatePossibilityToLink$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfNotTookPlaceLinkValidationResult>> {
  const rb = new RequestBuilder(rootUrl, tradesNotTookPlaceValidatePossibilityToLink.PATH, 'get');
  if (params) {
    rb.path('childTradeId', params.childTradeId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfNotTookPlaceLinkValidationResult>;
    })
  );
}

tradesNotTookPlaceValidatePossibilityToLink.PATH = '/bla-bla-vla/trades/nottookplace/link/{childTradeId}/validate';
