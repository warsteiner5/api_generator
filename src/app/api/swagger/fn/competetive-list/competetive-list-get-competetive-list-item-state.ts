/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfCompetitiveListItemStateEnum } from '../../models/api-market-json-result-of-competitive-list-item-state-enum';

export interface CompetetiveListGetCompetetiveListItemState$Params {
  competitiveListId: number;
}

export function competetiveListGetCompetetiveListItemState(http: HttpClient, rootUrl: string, params: CompetetiveListGetCompetetiveListItemState$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCompetitiveListItemStateEnum>> {
  const rb = new RequestBuilder(rootUrl, competetiveListGetCompetetiveListItemState.PATH, 'get');
  if (params) {
    rb.path('competitiveListId', params.competitiveListId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfCompetitiveListItemStateEnum>;
    })
  );
}

competetiveListGetCompetetiveListItemState.PATH = '/bla-bla-vla/competetivelist/{competitiveListId}/GetState';
