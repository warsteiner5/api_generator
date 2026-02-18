/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfCompetitiveListItemDto } from '../../models/api-market-json-result-of-list-of-competitive-list-item-dto';

export interface CompetetiveListGetCompetetiveListItemsByRequirementRequestId$Params {
  requirementRequestId: number;
}

export function competetiveListGetCompetetiveListItemsByRequirementRequestId(http: HttpClient, rootUrl: string, params: CompetetiveListGetCompetetiveListItemsByRequirementRequestId$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfCompetitiveListItemDto>> {
  const rb = new RequestBuilder(rootUrl, competetiveListGetCompetetiveListItemsByRequirementRequestId.PATH, 'get');
  if (params) {
    rb.path('requirementRequestId', params.requirementRequestId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfCompetitiveListItemDto>;
    })
  );
}

competetiveListGetCompetetiveListItemsByRequirementRequestId.PATH = '/bla-bla-vla/competetivelist/byRequirementRequestId/{requirementRequestId}';
