/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface AccountsGetAccountRefillDocument$Params {
  accountNumber: string | null;
  sum: number;
}

export function accountsGetAccountRefillDocument(http: HttpClient, rootUrl: string, params: AccountsGetAccountRefillDocument$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, accountsGetAccountRefillDocument.PATH, 'get');
  if (params) {
    rb.path('accountNumber', params.accountNumber, {});
    rb.path('sum', params.sum, {});
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

accountsGetAccountRefillDocument.PATH = '/bla-bla-vla/accounts/my/{accountNumber}/refill/{sum}';
