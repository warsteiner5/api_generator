/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiForgotPasswordModelAltDto } from '../../models/api-forgot-password-model';
import { ApiMarketJsonResultOfForgotPasswordResult } from '../../models/api-market-json-result-of-forgot-password-result';

export interface UsersForgotPassword$Params {
      body?: ApiForgotPasswordModelAltDto | null
}

export function usersForgotPassword(http: HttpClient, rootUrl: string, params?: UsersForgotPassword$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfForgotPasswordResult>> {
  const rb = new RequestBuilder(rootUrl, usersForgotPassword.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfForgotPasswordResult>;
    })
  );
}

usersForgotPassword.PATH = '/bla-bla-vla/users/forgot-password';
