/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiOrganizationUsersFilterAltDto } from '../../models/api-organization-users-filter';

export interface AccountGetAllUsersForOrganization$Params {
      body?: ApiOrganizationUsersFilterAltDto | null
}

export function accountGetAllUsersForOrganization(http: HttpClient, rootUrl: string, params?: AccountGetAllUsersForOrganization$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, accountGetAllUsersForOrganization.PATH, 'post');
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

accountGetAllUsersForOrganization.PATH = '/api/Account/GetAllUsersForOrganization';
