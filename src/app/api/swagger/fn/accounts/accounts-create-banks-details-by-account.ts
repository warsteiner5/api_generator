/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiBankingDetailsDto } from '../../models/api-banking-details-dto';
import { ApiMarketJsonResultOfIntegerAltDto } from '../../models/api-market-json-result-of-integer';

export interface AccountsCreateBanksDetailsByAccount$Params {
  accountNumber: string | null;
      body?: ApiBankingDetailsDto | null
}

export function accountsCreateBanksDetailsByAccount(http: HttpClient, rootUrl: string, params: AccountsCreateBanksDetailsByAccount$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
  const rb = new RequestBuilder(rootUrl, accountsCreateBanksDetailsByAccount.PATH, 'post');
  if (params) {
    rb.path('accountNumber', params.accountNumber, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>;
    })
  );
}

accountsCreateBanksDetailsByAccount.PATH = '/market/api/v1/accounts/my/{accountNumber}/bankDetails/create';
