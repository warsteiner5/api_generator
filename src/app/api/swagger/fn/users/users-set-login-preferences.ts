/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiLoginPreferencesDto } from '../../models/api-login-preferences-dto';
import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';

export interface UsersSetLoginPreferences$Params {
      body?: ApiLoginPreferencesDto | null
}

export function usersSetLoginPreferences(http: HttpClient, rootUrl: string, params?: UsersSetLoginPreferences$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, usersSetLoginPreferences.PATH, 'post');
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

usersSetLoginPreferences.PATH = '/bla-bla-vla/users/login/preferences';
