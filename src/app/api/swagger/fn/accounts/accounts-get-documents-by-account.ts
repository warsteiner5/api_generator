/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfFinDocumentDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-fin-document-dto';
import { ApiSearchObjectAltDto } from '../../models/api-search-object';

export interface AccountsGetDocumentsByAccount$Params {
  accountNumber: string | null;
      body?: ApiSearchObjectAltDto | null
}

export function accountsGetDocumentsByAccount(http: HttpClient, rootUrl: string, params: AccountsGetDocumentsByAccount$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfFinDocumentDto>> {
  const rb = new RequestBuilder(rootUrl, accountsGetDocumentsByAccount.PATH, 'post');
  if (params) {
    rb.path('accountNumber', params.accountNumber, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfFinDocumentDto>;
    })
  );
}

accountsGetDocumentsByAccount.PATH = '/bla-bla-vla/accounts/my/{accountNumber}/documents';
