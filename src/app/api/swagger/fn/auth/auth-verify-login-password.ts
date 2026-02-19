/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiLoginVerifyModelAltDto } from '../../models/api-login-verify-model';
import { ApiMarketJsonResultOfLoginVerifyResultAltDto } from '../../models/api-market-json-result-of-login-verify-result';

export interface AuthVerifyLoginPassword$Params {
      body?: ApiLoginVerifyModelAltDto | null
}

export function authVerifyLoginPassword(http: HttpClient, rootUrl: string, params?: AuthVerifyLoginPassword$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfLoginVerifyResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, authVerifyLoginPassword.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfLoginVerifyResultAltDto>;
    })
  );
}

authVerifyLoginPassword.PATH = '/market/api/v1/auth/login/verify';
