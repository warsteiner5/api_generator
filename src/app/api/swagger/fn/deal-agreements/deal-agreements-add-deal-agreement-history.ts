/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiAddDealAgreementHistoryRequestAltDto } from '../../models/api-add-deal-agreement-history-request';
import { ApiApiResultOfIntegerAltDto } from '../../models/api-api-result-of-integer';

export interface DealAgreementsAddDealAgreementHistory$Params {
  dealId: number;
      body?: ApiAddDealAgreementHistoryRequestAltDto | null
}

export function dealAgreementsAddDealAgreementHistory(http: HttpClient, rootUrl: string, params: DealAgreementsAddDealAgreementHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiApiResultOfIntegerAltDto>> {
  const rb = new RequestBuilder(rootUrl, dealAgreementsAddDealAgreementHistory.PATH, 'post');
  if (params) {
    rb.path('dealId', params.dealId, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiApiResultOfIntegerAltDto>;
    })
  );
}

dealAgreementsAddDealAgreementHistory.PATH = '/market/api/v1/deals/{dealId}/agreements/initial/history';
