/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';

export interface DealAgreementsApproveAgreementByCustomer$Params {
  dealId: number;
  agreementId: number;
}

export function dealAgreementsApproveAgreementByCustomer(http: HttpClient, rootUrl: string, params: DealAgreementsApproveAgreementByCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, dealAgreementsApproveAgreementByCustomer.PATH, 'post');
  if (params) {
    rb.path('dealId', params.dealId, {});
    rb.path('agreementId', params.agreementId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonVoidResultAltDto>;
    })
  );
}

dealAgreementsApproveAgreementByCustomer.PATH = '/market/api/v1/deals/{dealId}/agreements/{agreementId}/customers/approve';
