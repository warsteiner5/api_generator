/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfResetPasswordResult } from '../../models/api-market-json-result-of-reset-password-result';
import { ApiResetPasswordModelAltDto } from '../../models/api-reset-password-model';

export interface UsersResetPasswordPost$Params {
      body?: ApiResetPasswordModelAltDto | null
}

export function usersResetPasswordPost(http: HttpClient, rootUrl: string, params?: UsersResetPasswordPost$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfResetPasswordResult>> {
  const rb = new RequestBuilder(rootUrl, usersResetPasswordPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfResetPasswordResult>;
    })
  );
}

usersResetPasswordPost.PATH = '/bla-bla-vla/users/reset-password';
