/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfStringAltDto } from '../../models/api-market-json-result-of-string';

export interface AuthRedirectCallback$Params {
}

export function authRedirectCallback(http: HttpClient, rootUrl: string, params?: AuthRedirectCallback$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfStringAltDto>> {
  const rb = new RequestBuilder(rootUrl, authRedirectCallback.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfStringAltDto>;
    })
  );
}

authRedirectCallback.PATH = '/market/api/v1/auth/sso/callback';
