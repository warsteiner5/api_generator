/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiApplicationDto2 } from '../../models/api-application-dto-2';
import { ApiMarketJsonResultOfCardPaymentAvailabilityAltDto } from '../../models/api-market-json-result-of-card-payment-availability';

export interface TradesGetCardPaymentAvailability$Params {
  tradeId: number;
      body?: ApiApplicationDto2 | null
}

export function tradesGetCardPaymentAvailability(http: HttpClient, rootUrl: string, params: TradesGetCardPaymentAvailability$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCardPaymentAvailabilityAltDto>> {
  const rb = new RequestBuilder(rootUrl, tradesGetCardPaymentAvailability.PATH, 'post');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfCardPaymentAvailabilityAltDto>;
    })
  );
}

tradesGetCardPaymentAvailability.PATH = '/market/api/v1/trades/{tradeId}/application/card-payment/available';
