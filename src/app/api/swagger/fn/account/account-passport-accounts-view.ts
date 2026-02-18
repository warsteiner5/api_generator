/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface AccountPassportAccountsView$Params {
  redirect_uri: string | null;
}

export function accountPassportAccountsView(http: HttpClient, rootUrl: string, params: AccountPassportAccountsView$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, accountPassportAccountsView.PATH, 'get');
  if (params) {
    rb.query('redirect_uri', params.redirect_uri, {});
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

accountPassportAccountsView.PATH = '/bla-bla-vla/Account/PassportAccountsView';
