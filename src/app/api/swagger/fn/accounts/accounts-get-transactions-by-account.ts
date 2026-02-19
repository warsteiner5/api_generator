/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfTransactionShortDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-transaction-short-dto';
import { ApiSearchObjectAltDto } from '../../models/api-search-object';

export interface AccountsGetTransactionsByAccount$Params {
  accountNumber: string | null;
      body?: ApiSearchObjectAltDto | null
}

export function accountsGetTransactionsByAccount(http: HttpClient, rootUrl: string, params: AccountsGetTransactionsByAccount$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfTransactionShortDto>> {
  const rb = new RequestBuilder(rootUrl, accountsGetTransactionsByAccount.PATH, 'post');
  if (params) {
    rb.path('accountNumber', params.accountNumber, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfTransactionShortDto>;
    })
  );
}

accountsGetTransactionsByAccount.PATH = '/market/api/v1/accounts/my/{accountNumber}/transactions';
