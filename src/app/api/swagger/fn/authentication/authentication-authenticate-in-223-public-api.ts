/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface AuthenticationAuthenticateIn223PublicApi$Params {
  clientId: string | null;
  schemaVersion: string | null;
}

export function authenticationAuthenticateIn223PublicApi(http: HttpClient, rootUrl: string, params: AuthenticationAuthenticateIn223PublicApi$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, authenticationAuthenticateIn223PublicApi.PATH, 'get');
  if (params) {
    rb.query('clientId', params.clientId, {});
    rb.query('schemaVersion', params.schemaVersion, {});
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

authenticationAuthenticateIn223PublicApi.PATH = '/bla-bla-vla/Authentication/AuthenticateIn223PublicApi';
