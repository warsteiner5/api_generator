/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiFindParamsAltDto } from '../../models/api-find-params';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfFilterObjectAltDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-filter-object';

export interface FilterFindMyFilledFilters$Params {
      body?: ApiFindParamsAltDto | null
}

export function filterFindMyFilledFilters(http: HttpClient, rootUrl: string, params?: FilterFindMyFilledFilters$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfFilterObjectAltDto>> {
  const rb = new RequestBuilder(rootUrl, filterFindMyFilledFilters.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfFilterObjectAltDto>;
    })
  );
}

filterFindMyFilledFilters.PATH = '/market/api/v1/filters/my/filled';
