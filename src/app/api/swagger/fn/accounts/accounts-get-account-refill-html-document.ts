/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfString } from '../../models/api-market-json-result-of-string';

export interface AccountsGetAccountRefillHtmlDocument$Params {
  accountNumber: string | null;
  sum: number;
}

export function accountsGetAccountRefillHtmlDocument(http: HttpClient, rootUrl: string, params: AccountsGetAccountRefillHtmlDocument$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfString>> {
  const rb = new RequestBuilder(rootUrl, accountsGetAccountRefillHtmlDocument.PATH, 'get');
  if (params) {
    rb.path('accountNumber', params.accountNumber, {});
    rb.path('sum', params.sum, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfString>;
    })
  );
}

accountsGetAccountRefillHtmlDocument.PATH = '/bla-bla-vla/accounts/my/{accountNumber}/refill/{sum}/html';
