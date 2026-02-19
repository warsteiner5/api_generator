/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfTagItemAltDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-tag-item';
import { ApiSearchObjectAltDto } from '../../models/api-search-object';

export interface PomogatorGetSettingsTags$Params {
      body?: ApiSearchObjectAltDto | null
}

export function pomogatorGetSettingsTags(http: HttpClient, rootUrl: string, params?: PomogatorGetSettingsTags$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfTagItemAltDto>> {
  const rb = new RequestBuilder(rootUrl, pomogatorGetSettingsTags.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfTagItemAltDto>;
    })
  );
}

pomogatorGetSettingsTags.PATH = '/market/api/v1/pomogator/settings/tags';
