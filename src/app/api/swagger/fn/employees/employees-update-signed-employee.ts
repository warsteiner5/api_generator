/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfBooleanAltDto } from '../../models/api-market-json-result-of-boolean';
import { ApiUpdateSignedEmployeeDto } from '../../models/api-update-signed-employee-dto';

export interface EmployeesUpdateSignedEmployee$Params {
  id: number;
      body?: ApiUpdateSignedEmployeeDto | null
}

export function employeesUpdateSignedEmployee(http: HttpClient, rootUrl: string, params: EmployeesUpdateSignedEmployee$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
  const rb = new RequestBuilder(rootUrl, employeesUpdateSignedEmployee.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>;
    })
  );
}

employeesUpdateSignedEmployee.PATH = '/market/api/v1/employees/{id}/signed';
