/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfPublishApplicationResultAltDto } from '../../models/api-market-json-result-of-publish-application-result';
import { ApiOrderApproveDto } from '../../models/api-order-approve-dto';

export interface OrdersApproveAgreementByParticipant$Params {
      body?: ApiOrderApproveDto | null
}

export function ordersApproveAgreementByParticipant(http: HttpClient, rootUrl: string, params?: OrdersApproveAgreementByParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPublishApplicationResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, ordersApproveAgreementByParticipant.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfPublishApplicationResultAltDto>;
    })
  );
}

ordersApproveAgreementByParticipant.PATH = '/market/api/v1/orders/participants/approve';
