/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketSearchRawModelAltDto } from '../../models/api-market-json-result-of-market-search-raw-model';

export interface FilterGetFilterModel$Params {
}

export function filterGetFilterModel(http: HttpClient, rootUrl: string, params?: FilterGetFilterModel$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketSearchRawModelAltDto>> {
  const rb = new RequestBuilder(rootUrl, filterGetFilterModel.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketSearchRawModelAltDto>;
    })
  );
}

filterGetFilterModel.PATH = '/market/api/v1/filters/model';
