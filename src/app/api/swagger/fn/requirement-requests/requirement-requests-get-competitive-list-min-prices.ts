/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfCompetitiveListMinPriceDto } from '../../models/api-market-json-result-of-list-of-competitive-list-min-price-dto';

export interface RequirementRequestsGetCompetitiveListMinPrices$Params {
  requirementRequestId: number;
  kladrCode: string | null;
}

export function requirementRequestsGetCompetitiveListMinPrices(http: HttpClient, rootUrl: string, params: RequirementRequestsGetCompetitiveListMinPrices$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfCompetitiveListMinPriceDto>> {
  const rb = new RequestBuilder(rootUrl, requirementRequestsGetCompetitiveListMinPrices.PATH, 'get');
  if (params) {
    rb.path('requirementRequestId', params.requirementRequestId, {});
    rb.path('kladrCode', params.kladrCode, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfCompetitiveListMinPriceDto>;
    })
  );
}

requirementRequestsGetCompetitiveListMinPrices.PATH = '/market/api/v1/RequirementRequests/CompetitiveListMinPrices/{requirementRequestId}/{kladrCode}';
