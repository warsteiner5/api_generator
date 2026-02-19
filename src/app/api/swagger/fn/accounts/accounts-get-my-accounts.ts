/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfAccountDto } from '../../models/api-market-json-result-of-list-of-account-dto';

export interface AccountsGetMyAccounts$Params {
}

export function accountsGetMyAccounts(http: HttpClient, rootUrl: string, params?: AccountsGetMyAccounts$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfAccountDto>> {
  const rb = new RequestBuilder(rootUrl, accountsGetMyAccounts.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfAccountDto>;
    })
  );
}

accountsGetMyAccounts.PATH = '/market/api/v1/accounts/my';
