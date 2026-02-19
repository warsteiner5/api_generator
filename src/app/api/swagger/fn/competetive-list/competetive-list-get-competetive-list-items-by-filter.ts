/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiCompetetiveListFilterAltDto } from '../../models/api-competetive-list-filter';
import { ApiMarketJsonResultOfListOfCompetitiveListItemDto } from '../../models/api-market-json-result-of-list-of-competitive-list-item-dto';

export interface CompetetiveListGetCompetetiveListItemsByFilter$Params {
      body?: ApiCompetetiveListFilterAltDto | null
}

export function competetiveListGetCompetetiveListItemsByFilter(http: HttpClient, rootUrl: string, params?: CompetetiveListGetCompetetiveListItemsByFilter$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfCompetitiveListItemDto>> {
  const rb = new RequestBuilder(rootUrl, competetiveListGetCompetetiveListItemsByFilter.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

competetiveListGetCompetetiveListItemsByFilter.PATH = '/market/api/v1/competetivelist';
