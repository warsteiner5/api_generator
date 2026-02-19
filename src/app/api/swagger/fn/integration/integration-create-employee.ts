/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiCreateEmployeeRequestAltDto } from '../../models/api-create-employee-request';

export interface IntegrationCreateEmployee$Params {
      body?: ApiCreateEmployeeRequestAltDto | null
}

export function integrationCreateEmployee(http: HttpClient, rootUrl: string, params?: IntegrationCreateEmployee$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, integrationCreateEmployee.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: 'application/octet-stream', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Blob>;
    })
  );
}

integrationCreateEmployee.PATH = '/market/api/v1/integration/employee';
