/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfEmployeeAgreementDto } from '../../models/api-market-json-result-of-employee-agreement-dto';

export interface UsersGetAgreement$Params {
}

export function usersGetAgreement(http: HttpClient, rootUrl: string, params?: UsersGetAgreement$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfEmployeeAgreementDto>> {
  const rb = new RequestBuilder(rootUrl, usersGetAgreement.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfEmployeeAgreementDto>;
    })
  );
}

usersGetAgreement.PATH = '/market/api/v1/users/agreement';
