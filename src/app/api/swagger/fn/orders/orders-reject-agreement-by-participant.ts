/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfInteger } from '../../models/api-market-json-result-of-integer';

export interface OrdersRejectAgreementByParticipant$Params {
  id: number;
  agreementId: number;
}

export function ordersRejectAgreementByParticipant(http: HttpClient, rootUrl: string, params: OrdersRejectAgreementByParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfInteger>> {
  const rb = new RequestBuilder(rootUrl, ordersRejectAgreementByParticipant.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('agreementId', params.agreementId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfInteger>;
    })
  );
}

ordersRejectAgreementByParticipant.PATH = '/bla-bla-vla/orders/participants/{id}/agreement/{agreementId}/reject';
