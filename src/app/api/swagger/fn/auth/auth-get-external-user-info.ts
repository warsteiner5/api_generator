/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfExternalUserInfoAltDto } from '../../models/api-market-json-result-of-external-user-info';

export interface AuthGetExternalUserInfo$Params {
}

export function authGetExternalUserInfo(http: HttpClient, rootUrl: string, params?: AuthGetExternalUserInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfExternalUserInfoAltDto>> {
  const rb = new RequestBuilder(rootUrl, authGetExternalUserInfo.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfExternalUserInfoAltDto>;
    })
  );
}

authGetExternalUserInfo.PATH = '/market/api/v1/auth/externalUserInfo';
