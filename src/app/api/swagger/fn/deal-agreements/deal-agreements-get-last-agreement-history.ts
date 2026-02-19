/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfDealAgreementHistoryDto } from '../../models/api-market-json-result-of-deal-agreement-history-dto';

export interface DealAgreementsGetLastAgreementHistory$Params {
  dealId: number;
}

export function dealAgreementsGetLastAgreementHistory(http: HttpClient, rootUrl: string, params: DealAgreementsGetLastAgreementHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDealAgreementHistoryDto>> {
  const rb = new RequestBuilder(rootUrl, dealAgreementsGetLastAgreementHistory.PATH, 'get');
  if (params) {
    rb.path('dealId', params.dealId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfDealAgreementHistoryDto>;
    })
  );
}

dealAgreementsGetLastAgreementHistory.PATH = '/market/api/v1/deals/{dealId}/agreements/last';
