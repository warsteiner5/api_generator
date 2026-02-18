/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfPomogatorSettingsResult } from '../../models/api-market-json-result-of-pomogator-settings-result';

export interface PomogatorGetSettings$Params {
}

export function pomogatorGetSettings(http: HttpClient, rootUrl: string, params?: PomogatorGetSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPomogatorSettingsResult>> {
  const rb = new RequestBuilder(rootUrl, pomogatorGetSettings.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfPomogatorSettingsResult>;
    })
  );
}

pomogatorGetSettings.PATH = '/bla-bla-vla/pomogator/getSettings';
