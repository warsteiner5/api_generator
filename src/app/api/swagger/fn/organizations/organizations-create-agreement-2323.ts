/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfTaskOfGuidAltDto } from '../../models/api-market-json-result-of-task-of-guid';

export interface OrganizationsCreateAgreement2323$Params {
}

export function organizationsCreateAgreement2323(http: HttpClient, rootUrl: string, params?: OrganizationsCreateAgreement2323$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTaskOfGuidAltDto>> {
  const rb = new RequestBuilder(rootUrl, organizationsCreateAgreement2323.PATH, 'post');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfTaskOfGuidAltDto>;
    })
  );
}

organizationsCreateAgreement2323.PATH = '/market/api/v1/organizations/create-agreement-2323';
