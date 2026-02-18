/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfString } from '../../models/api-market-json-result-of-string';

export interface AuthGetSsoRedirectUrl$Params {
  returnUrl: string | null;
}

export function authGetSsoRedirectUrl(http: HttpClient, rootUrl: string, params: AuthGetSsoRedirectUrl$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfString>> {
  const rb = new RequestBuilder(rootUrl, authGetSsoRedirectUrl.PATH, 'get');
  if (params) {
    rb.query('returnUrl', params.returnUrl, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfString>;
    })
  );
}

authGetSsoRedirectUrl.PATH = '/bla-bla-vla/auth/sso/redirect';
