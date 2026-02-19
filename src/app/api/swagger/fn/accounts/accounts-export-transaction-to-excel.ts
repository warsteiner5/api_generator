/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiSearchObjectAltDto } from '../../models/api-search-object';

export interface AccountsExportTransactionToExcel$Params {
  accountNumber: string | null;
      body?: ApiSearchObjectAltDto | null
}

export function accountsExportTransactionToExcel(http: HttpClient, rootUrl: string, params: AccountsExportTransactionToExcel$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, accountsExportTransactionToExcel.PATH, 'post');
  if (params) {
    rb.path('accountNumber', params.accountNumber, {});
    rb.body(params.body, 'application/json');
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

accountsExportTransactionToExcel.PATH = '/market/api/v1/accounts/my/{accountNumber}/transactions/export';
