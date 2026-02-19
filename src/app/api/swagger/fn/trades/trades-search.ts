/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfStarSearchObjAltDto } from '../../models/api-market-json-result-of-star-search-obj';
import { ApiStarRequestAltDto } from '../../models/api-star-request';

export interface TradesSearch$Params {
      body?: ApiStarRequestAltDto | null
}

export function tradesSearch(http: HttpClient, rootUrl: string, params?: TradesSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfStarSearchObjAltDto>> {
  const rb = new RequestBuilder(rootUrl, tradesSearch.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfStarSearchObjAltDto>;
    })
  );
}

tradesSearch.PATH = '/market/api/v1/trades/search';
