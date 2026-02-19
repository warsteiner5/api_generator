/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfBankingDetailsDto } from '../../models/api-market-json-result-of-list-of-banking-details-dto';

export interface AccountsGetBanksDetailsListByAccount$Params {
  accountNumber: string | null;
}

export function accountsGetBanksDetailsListByAccount(http: HttpClient, rootUrl: string, params: AccountsGetBanksDetailsListByAccount$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfBankingDetailsDto>> {
  const rb = new RequestBuilder(rootUrl, accountsGetBanksDetailsListByAccount.PATH, 'post');
  if (params) {
    rb.path('accountNumber', params.accountNumber, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfBankingDetailsDto>;
    })
  );
}

accountsGetBanksDetailsListByAccount.PATH = '/market/api/v1/accounts/my/{accountNumber}/bankDetailsList';
