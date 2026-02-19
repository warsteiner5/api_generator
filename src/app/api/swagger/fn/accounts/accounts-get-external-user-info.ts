/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfExternalUserInfoAltDto } from '../../models/api-market-json-result-of-external-user-info';

export interface AccountsGetExternalUserInfo$Params {
}

export function accountsGetExternalUserInfo(http: HttpClient, rootUrl: string, params?: AccountsGetExternalUserInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfExternalUserInfoAltDto>> {
  const rb = new RequestBuilder(rootUrl, accountsGetExternalUserInfo.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfExternalUserInfoAltDto>;
    })
  );
}

accountsGetExternalUserInfo.PATH = '/market/api/v1/accounts/externalUserInfo';
