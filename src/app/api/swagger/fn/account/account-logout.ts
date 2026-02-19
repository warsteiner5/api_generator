/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface AccountLogout$Params {
  returnUrl?: string | null;
  authenticationType?: string | null;
  oauthTokenId?: string | null;
}

export function accountLogout(http: HttpClient, rootUrl: string, params?: AccountLogout$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, accountLogout.PATH, 'get');
  if (params) {
    rb.query('returnUrl', params.returnUrl, {});
    rb.query('authenticationType', params.authenticationType, {});
    rb.query('oauthTokenId', params.oauthTokenId, {});
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

accountLogout.PATH = '/api/Account/Logout';
