/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiBankingDetailsDto } from '../../models/api-banking-details-dto';
import { ApiMarketJsonResultOfInteger } from '../../models/api-market-json-result-of-integer';

export interface AccountsEditBanksDetailsByAccount$Params {
  accountNumber: string | null;
  bankingDetailsId: number;
      body?: ApiBankingDetailsDto | null
}

export function accountsEditBanksDetailsByAccount(http: HttpClient, rootUrl: string, params: AccountsEditBanksDetailsByAccount$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfInteger>> {
  const rb = new RequestBuilder(rootUrl, accountsEditBanksDetailsByAccount.PATH, 'post');
  if (params) {
    rb.path('accountNumber', params.accountNumber, {});
    rb.path('bankingDetailsId', params.bankingDetailsId, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfInteger>;
    })
  );
}

accountsEditBanksDetailsByAccount.PATH = '/bla-bla-vla/accounts/my/{accountNumber}/bankDetails/{bankingDetailsId}/edit';
