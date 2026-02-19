/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface AccountGetExternalLogin$Params {
  provider: string | null;
  error?: string | null;
  organizationId?: string | null;
}

export function accountGetExternalLogin(http: HttpClient, rootUrl: string, params: AccountGetExternalLogin$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, accountGetExternalLogin.PATH, 'get');
  if (params) {
    rb.query('provider', params.provider, {});
    rb.query('error', params.error, {});
    rb.query('organizationId', params.organizationId, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: 'application/octet-stream', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Blob>;
    })
  );
}

accountGetExternalLogin.PATH = '/api/Account/ExternalLogin';
