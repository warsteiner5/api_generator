/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfIntegerAltDto } from '../../models/api-market-json-result-of-integer';
import { ApiSaveFilterObjectAltDto } from '../../models/api-save-filter-object';

export interface FilterUpdateFilter$Params {
  id: number;
      body?: ApiSaveFilterObjectAltDto | null
}

export function filterUpdateFilter(http: HttpClient, rootUrl: string, params: FilterUpdateFilter$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
  const rb = new RequestBuilder(rootUrl, filterUpdateFilter.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>;
    })
  );
}

filterUpdateFilter.PATH = '/market/api/v1/filters/{id}';
