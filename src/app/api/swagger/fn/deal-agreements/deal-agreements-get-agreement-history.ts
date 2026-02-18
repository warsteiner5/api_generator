/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfDealAgreementHistoryDto } from '../../models/api-market-json-result-of-list-of-deal-agreement-history-dto';

export interface DealAgreementsGetAgreementHistory$Params {
  dealId: number;
}

export function dealAgreementsGetAgreementHistory(http: HttpClient, rootUrl: string, params: DealAgreementsGetAgreementHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfDealAgreementHistoryDto>> {
  const rb = new RequestBuilder(rootUrl, dealAgreementsGetAgreementHistory.PATH, 'get');
  if (params) {
    rb.path('dealId', params.dealId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfDealAgreementHistoryDto>;
    })
  );
}

dealAgreementsGetAgreementHistory.PATH = '/bla-bla-vla/deals/{dealId}/agreements/history';
