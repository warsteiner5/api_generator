/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';

export interface DealAgreementsApproveAgreementByParticipant$Params {
  dealId: number;
  agreementId: number;
}

export function dealAgreementsApproveAgreementByParticipant(http: HttpClient, rootUrl: string, params: DealAgreementsApproveAgreementByParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, dealAgreementsApproveAgreementByParticipant.PATH, 'post');
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

dealAgreementsApproveAgreementByParticipant.PATH = '/bla-bla-vla/deals/{dealId}/agreements/{agreementId}/participants/approve';
