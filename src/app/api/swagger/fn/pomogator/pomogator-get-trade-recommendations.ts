/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfSearchRecommendationsResult } from '../../models/api-market-json-result-of-search-recommendations-result';
import { ApiSearchObjectAltDto } from '../../models/api-search-object';

export interface PomogatorGetTradeRecommendations$Params {
      body?: ApiSearchObjectAltDto | null
}

export function pomogatorGetTradeRecommendations(http: HttpClient, rootUrl: string, params?: PomogatorGetTradeRecommendations$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfSearchRecommendationsResult>> {
  const rb = new RequestBuilder(rootUrl, pomogatorGetTradeRecommendations.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfSearchRecommendationsResult>;
    })
  );
}

pomogatorGetTradeRecommendations.PATH = '/bla-bla-vla/pomogator/recommendations';
