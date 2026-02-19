/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfCompetitiveListItemForViewDto } from '../../models/api-market-json-result-of-competitive-list-item-for-view-dto';

export interface CompetetiveListGetCompetetiveListItemsById$Params {
  competitiveListId: number;
}

export function competetiveListGetCompetetiveListItemsById(http: HttpClient, rootUrl: string, params: CompetetiveListGetCompetetiveListItemsById$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCompetitiveListItemForViewDto>> {
  const rb = new RequestBuilder(rootUrl, competetiveListGetCompetetiveListItemsById.PATH, 'get');
  if (params) {
    rb.path('competitiveListId', params.competitiveListId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfCompetitiveListItemForViewDto>;
    })
  );
}

competetiveListGetCompetetiveListItemsById.PATH = '/market/api/v1/competetivelist/{competitiveListId}/Get';
