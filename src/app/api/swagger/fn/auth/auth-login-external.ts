/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfSignInResultAltDto } from '../../models/api-market-json-result-of-sign-in-result';
import { ApiSignInModelAltDto } from '../../models/api-sign-in-model';

export interface AuthLoginExternal$Params {
  externalSystemIdentityKey: string | null;
      body?: ApiSignInModelAltDto | null
}

export function authLoginExternal(http: HttpClient, rootUrl: string, params: AuthLoginExternal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfSignInResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, authLoginExternal.PATH, 'post');
  if (params) {
    rb.path('externalSystemIdentityKey', params.externalSystemIdentityKey, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfSignInResultAltDto>;
    })
  );
}

authLoginExternal.PATH = '/market/api/v1/auth/login/external/{ExternalSystemIdentityKey}';
