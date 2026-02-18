/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfTagItem } from '../../models/api-market-json-result-of-tag-item';
import { ApiSearchTypeEnum } from '../../models/api-search-type-enum';

export interface PomogatorGetSettingsTag$Params {
  id: string | null;
  type: ApiSearchTypeEnum;
}

export function pomogatorGetSettingsTag(http: HttpClient, rootUrl: string, params: PomogatorGetSettingsTag$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTagItem>> {
  const rb = new RequestBuilder(rootUrl, pomogatorGetSettingsTag.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.query('type', params.type, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfTagItem>;
    })
  );
}

pomogatorGetSettingsTag.PATH = '/bla-bla-vla/pomogator/settings/tags/{id}';
