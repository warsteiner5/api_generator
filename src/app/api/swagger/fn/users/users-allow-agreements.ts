/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiEmployeeAgreementConfirmationRequestAltDto } from '../../models/api-employee-agreement-confirmation-request';
import { ApiMarketJsonResultOfBoolean } from '../../models/api-market-json-result-of-boolean';

export interface UsersAllowAgreements$Params {
      body?: ApiEmployeeAgreementConfirmationRequestAltDto | null
}

export function usersAllowAgreements(http: HttpClient, rootUrl: string, params?: UsersAllowAgreements$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
  const rb = new RequestBuilder(rootUrl, usersAllowAgreements.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfBoolean>;
    })
  );
}

usersAllowAgreements.PATH = '/bla-bla-vla/users/agreement/allow';
