/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiCanCreateFromNotTookPlaceTradeValidationDto } from '../../models/api-can-create-from-not-took-place-trade-validation-dto';
import { ApiMarketJsonResultOfCanCreateChildTradeValidationResult } from '../../models/api-market-json-result-of-can-create-child-trade-validation-result';

export interface TradesNotTookPlaceValidateCanCreateChildTrade$Params {
      body?: ApiCanCreateFromNotTookPlaceTradeValidationDto | null
}

export function tradesNotTookPlaceValidateCanCreateChildTrade(http: HttpClient, rootUrl: string, params?: TradesNotTookPlaceValidateCanCreateChildTrade$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCanCreateChildTradeValidationResult>> {
  const rb = new RequestBuilder(rootUrl, tradesNotTookPlaceValidateCanCreateChildTrade.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfCanCreateChildTradeValidationResult>;
    })
  );
}

tradesNotTookPlaceValidateCanCreateChildTrade.PATH = '/bla-bla-vla/trades/nottookplace/canCreateChild';
