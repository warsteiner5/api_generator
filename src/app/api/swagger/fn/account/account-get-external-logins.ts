/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiExternalLoginViewModelAltDto } from '../../models/api-external-login-view-model';

export interface AccountGetExternalLogins$Params {
  returnUrl: string | null;
  redirectAfterloginUrl?: string | null;
  generateState?: boolean;
}

export function accountGetExternalLogins(http: HttpClient, rootUrl: string, params: AccountGetExternalLogins$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ApiExternalLoginViewModelAltDto> | null>> {
  const rb = new RequestBuilder(rootUrl, accountGetExternalLogins.PATH, 'get');
  if (params) {
    rb.query('returnUrl', params.returnUrl, {});
    rb.query('redirectAfterloginUrl', params.redirectAfterloginUrl, {});
    rb.query('generateState', params.generateState, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ApiExternalLoginViewModelAltDto> | null>;
    })
  );
}

accountGetExternalLogins.PATH = '/api/Account/ExternalLogins';
