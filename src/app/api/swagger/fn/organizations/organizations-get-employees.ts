/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketEmployeeShortInfo } from '../../models/api-market-json-result-of-market-employee-short-info';

export interface OrganizationsGetEmployees$Params {
}

export function organizationsGetEmployees(http: HttpClient, rootUrl: string, params?: OrganizationsGetEmployees$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketEmployeeShortInfo>> {
  const rb = new RequestBuilder(rootUrl, organizationsGetEmployees.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketEmployeeShortInfo>;
    })
  );
}

organizationsGetEmployees.PATH = '/bla-bla-vla/organizations/employees';
