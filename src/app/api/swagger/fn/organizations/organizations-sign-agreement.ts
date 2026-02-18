/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiFileSignDto } from '../../models/api-file-sign-dto';
import { ApiMarketJsonResultOfBoolean } from '../../models/api-market-json-result-of-boolean';

export interface OrganizationsSignAgreement$Params {
      body?: ApiFileSignDto | null
}

export function organizationsSignAgreement(http: HttpClient, rootUrl: string, params?: OrganizationsSignAgreement$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
  const rb = new RequestBuilder(rootUrl, organizationsSignAgreement.PATH, 'post');
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

organizationsSignAgreement.PATH = '/bla-bla-vla/organizations/sign-agreement';
