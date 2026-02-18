/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfFilterObject } from '../../models/api-market-json-result-of-filter-object';

export interface FilterGetFilterByGuid$Params {
  guid: string;
}

export function filterGetFilterByGuid(http: HttpClient, rootUrl: string, params: FilterGetFilterByGuid$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfFilterObject>> {
  const rb = new RequestBuilder(rootUrl, filterGetFilterByGuid.PATH, 'get');
  if (params) {
    rb.path('guid', params.guid, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfFilterObject>;
    })
  );
}

filterGetFilterByGuid.PATH = '/bla-bla-vla/filters/byguid/{guid}';
