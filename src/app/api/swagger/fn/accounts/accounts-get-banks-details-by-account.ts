/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfBankingDetailsDto } from '../../models/api-market-json-result-of-banking-details-dto';

export interface AccountsGetBanksDetailsByAccount$Params {
  accountNumber: string | null;
}

export function accountsGetBanksDetailsByAccount(http: HttpClient, rootUrl: string, params: AccountsGetBanksDetailsByAccount$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBankingDetailsDto>> {
  const rb = new RequestBuilder(rootUrl, accountsGetBanksDetailsByAccount.PATH, 'post');
  if (params) {
    rb.path('accountNumber', params.accountNumber, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfBankingDetailsDto>;
    })
  );
}

accountsGetBanksDetailsByAccount.PATH = '/bla-bla-vla/accounts/my/{accountNumber}/bankDetails';
