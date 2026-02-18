/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfLoginPreferenceModel } from '../../models/api-market-json-result-of-login-preference-model';

export interface UsersGetLoginPreferences$Params {
}

export function usersGetLoginPreferences(http: HttpClient, rootUrl: string, params?: UsersGetLoginPreferences$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfLoginPreferenceModel>> {
  const rb = new RequestBuilder(rootUrl, usersGetLoginPreferences.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfLoginPreferenceModel>;
    })
  );
}

usersGetLoginPreferences.PATH = '/bla-bla-vla/users/login/preferences';
