/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfTransactionDto } from '../../models/api-market-json-result-of-transaction-dto';

export interface AccountsGetTransaction$Params {
  accountNumber: string | null;
  id: number;
}

export function accountsGetTransaction(http: HttpClient, rootUrl: string, params: AccountsGetTransaction$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTransactionDto>> {
  const rb = new RequestBuilder(rootUrl, accountsGetTransaction.PATH, 'get');
  if (params) {
    rb.path('accountNumber', params.accountNumber, {});
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfTransactionDto>;
    })
  );
}

accountsGetTransaction.PATH = '/market/api/v1/accounts/my/{accountNumber}/transactions/{id}';
