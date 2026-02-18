/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ManagerAgentCreateManagerEmployeeIfNotExists$Params {
  organizationGuid: string;
}

export function managerAgentCreateManagerEmployeeIfNotExists(http: HttpClient, rootUrl: string, params: ManagerAgentCreateManagerEmployeeIfNotExists$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, managerAgentCreateManagerEmployeeIfNotExists.PATH, 'get');
  if (params) {
    rb.path('organizationGuid', params.organizationGuid, {});
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

managerAgentCreateManagerEmployeeIfNotExists.PATH = '/bla-bla-vla/managerAgent/create-employee/{organizationGuid}';
