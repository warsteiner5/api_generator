/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfEmployeeDto } from '../../models/api-market-json-result-of-employee-dto';

export interface EmployeesSelf$Params {
}

export function employeesSelf(http: HttpClient, rootUrl: string, params?: EmployeesSelf$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfEmployeeDto>> {
  const rb = new RequestBuilder(rootUrl, employeesSelf.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfEmployeeDto>;
    })
  );
}

employeesSelf.PATH = '/bla-bla-vla/employees/self';
