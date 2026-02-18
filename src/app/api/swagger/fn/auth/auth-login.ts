/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfSignInResult } from '../../models/api-market-json-result-of-sign-in-result';
import { ApiSignInModelAltDto } from '../../models/api-sign-in-model';

export interface AuthLogin$Params {
      body?: ApiSignInModelAltDto | null
}

export function authLogin(http: HttpClient, rootUrl: string, params?: AuthLogin$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfSignInResult>> {
  const rb = new RequestBuilder(rootUrl, authLogin.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfSignInResult>;
    })
  );
}

authLogin.PATH = '/bla-bla-vla/auth/login';
