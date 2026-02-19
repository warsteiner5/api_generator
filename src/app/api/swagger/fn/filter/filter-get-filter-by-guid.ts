/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfFilterObjectAltDto } from '../../models/api-market-json-result-of-filter-object';

export interface FilterGetFilterByGuid$Params {
  guid: string;
}

export function filterGetFilterByGuid(http: HttpClient, rootUrl: string, params: FilterGetFilterByGuid$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfFilterObjectAltDto>> {
  const rb = new RequestBuilder(rootUrl, filterGetFilterByGuid.PATH, 'get');
  if (params) {
    rb.path('guid', params.guid, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfFilterObjectAltDto>;
    })
  );
}

filterGetFilterByGuid.PATH = '/market/api/v1/filters/byguid/{guid}';
