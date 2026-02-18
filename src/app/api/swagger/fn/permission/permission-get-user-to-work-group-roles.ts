/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface PermissionGetUserToWorkGroupRoles$Params {
  lk: number;
}

export function permissionGetUserToWorkGroupRoles(http: HttpClient, rootUrl: string, params: PermissionGetUserToWorkGroupRoles$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, permissionGetUserToWorkGroupRoles.PATH, 'get');
  if (params) {
    rb.path('lk', params.lk, {});
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

permissionGetUserToWorkGroupRoles.PATH = '/bla-bla-vla/permissions/UserToWorkGroupRoles/{lk}';
