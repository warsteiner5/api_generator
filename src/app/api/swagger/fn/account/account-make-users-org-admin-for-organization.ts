/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface AccountMakeUsersOrgAdminForOrganization$Params {
      body?: Array<string> | null
}

export function accountMakeUsersOrgAdminForOrganization(http: HttpClient, rootUrl: string, params?: AccountMakeUsersOrgAdminForOrganization$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, accountMakeUsersOrgAdminForOrganization.PATH, 'post');
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

accountMakeUsersOrgAdminForOrganization.PATH = '/bla-bla-vla/Account/MakeUsersOrgAdminForOrganization';
