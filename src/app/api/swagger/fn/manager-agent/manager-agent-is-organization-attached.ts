/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ManagerAgentIsOrganizationAttached$Params {
  organizationGuid: string;
}

export function managerAgentIsOrganizationAttached(http: HttpClient, rootUrl: string, params: ManagerAgentIsOrganizationAttached$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, managerAgentIsOrganizationAttached.PATH, 'post');
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

managerAgentIsOrganizationAttached.PATH = '/market/api/v1/managerAgent/is-organisation-attached/{organizationGuid}';
