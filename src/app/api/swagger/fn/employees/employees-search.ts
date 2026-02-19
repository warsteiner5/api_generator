/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfEmployeeItemDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-employee-item-dto';
import { ApiSearchObjectAltDto } from '../../models/api-search-object';

export interface EmployeesSearch$Params {
      body?: ApiSearchObjectAltDto | null
}

export function employeesSearch(http: HttpClient, rootUrl: string, params?: EmployeesSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfEmployeeItemDto>> {
  const rb = new RequestBuilder(rootUrl, employeesSearch.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfEmployeeItemDto>;
    })
  );
}

employeesSearch.PATH = '/market/api/v1/employees/search';
