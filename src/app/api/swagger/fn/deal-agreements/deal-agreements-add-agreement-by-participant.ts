/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiAddDealAgreementRequestAltDto } from '../../models/api-add-deal-agreement-request';
import { ApiMarketJsonResultOfInteger } from '../../models/api-market-json-result-of-integer';

export interface DealAgreementsAddAgreementByParticipant$Params {
  dealId: number;
      body?: ApiAddDealAgreementRequestAltDto | null
}

export function dealAgreementsAddAgreementByParticipant(http: HttpClient, rootUrl: string, params: DealAgreementsAddAgreementByParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfInteger>> {
  const rb = new RequestBuilder(rootUrl, dealAgreementsAddAgreementByParticipant.PATH, 'post');
  if (params) {
    rb.path('dealId', params.dealId, {});
    rb.body(params.body, 'application/json');
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

dealAgreementsAddAgreementByParticipant.PATH = '/bla-bla-vla/deals/{dealId}/agreements/participants';
