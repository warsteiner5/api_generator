/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiEmployeeDataToSignRequestAltDto } from '../../models/api-employee-data-to-sign-request';
import { ApiMarketJsonResultOfEmployeeDataToSignDto } from '../../models/api-market-json-result-of-employee-data-to-sign-dto';

export interface EmployeesGetEmployeeDataToSign$Params {
  id: number;
      body?: ApiEmployeeDataToSignRequestAltDto | null
}

export function employeesGetEmployeeDataToSign(http: HttpClient, rootUrl: string, params: EmployeesGetEmployeeDataToSign$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfEmployeeDataToSignDto>> {
  const rb = new RequestBuilder(rootUrl, employeesGetEmployeeDataToSign.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfEmployeeDataToSignDto>;
    })
  );
}

employeesGetEmployeeDataToSign.PATH = '/market/api/v1/employees/{id}/data-to-sign';
