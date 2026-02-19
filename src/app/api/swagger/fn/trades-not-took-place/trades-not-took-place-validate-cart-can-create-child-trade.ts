/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiCanCreateFromNotTookPlaceTradeValidationDto } from '../../models/api-can-create-from-not-took-place-trade-validation-dto';
import { ApiMarketJsonResultOfCanCreateChildTradeValidationResultAltDto } from '../../models/api-market-json-result-of-can-create-child-trade-validation-result';

export interface TradesNotTookPlaceValidateCartCanCreateChildTrade$Params {
      body?: ApiCanCreateFromNotTookPlaceTradeValidationDto | null
}

export function tradesNotTookPlaceValidateCartCanCreateChildTrade(http: HttpClient, rootUrl: string, params?: TradesNotTookPlaceValidateCartCanCreateChildTrade$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCanCreateChildTradeValidationResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, tradesNotTookPlaceValidateCartCanCreateChildTrade.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfCanCreateChildTradeValidationResultAltDto>;
    })
  );
}

tradesNotTookPlaceValidateCartCanCreateChildTrade.PATH = '/market/api/v1/trades/nottookplace/cart/canCreateChild';
