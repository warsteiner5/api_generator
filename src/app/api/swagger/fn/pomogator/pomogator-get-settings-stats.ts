/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfSettingsStatsResult } from '../../models/api-market-json-result-of-settings-stats-result';

export interface PomogatorGetSettingsStats$Params {
}

export function pomogatorGetSettingsStats(http: HttpClient, rootUrl: string, params?: PomogatorGetSettingsStats$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfSettingsStatsResult>> {
  const rb = new RequestBuilder(rootUrl, pomogatorGetSettingsStats.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfSettingsStatsResult>;
    })
  );
}

pomogatorGetSettingsStats.PATH = '/bla-bla-vla/pomogator/settings/stats';
