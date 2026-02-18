/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';
import { ApiTagSettingsToggleDto } from '../../models/api-tag-settings-toggle-dto';

export interface PomogatorToggleTagSettings$Params {
      body?: ApiTagSettingsToggleDto | null
}

export function pomogatorToggleTagSettings(http: HttpClient, rootUrl: string, params?: PomogatorToggleTagSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, pomogatorToggleTagSettings.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonVoidResultAltDto>;
    })
  );
}

pomogatorToggleTagSettings.PATH = '/bla-bla-vla/pomogator/toggleTagSettings';
