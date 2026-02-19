/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfBooleanAltDto } from '../../models/api-market-json-result-of-boolean';
import { ApiSearchTypeEnum } from '../../models/api-search-type-enum';

export interface PomogatorGetSettingsTagExist$Params {
  tag: string | null;
  type: ApiSearchTypeEnum;
}

export function pomogatorGetSettingsTagExist(http: HttpClient, rootUrl: string, params: PomogatorGetSettingsTagExist$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
  const rb = new RequestBuilder(rootUrl, pomogatorGetSettingsTagExist.PATH, 'get');
  if (params) {
    rb.query('tag', params.tag, {});
    rb.query('type', params.type, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>;
    })
  );
}

pomogatorGetSettingsTagExist.PATH = '/market/api/v1/pomogator/settings/tags/exist';
