/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { permissionGetUserToWorkGroupRoles } from '../fn/permission/permission-get-user-to-work-group-roles';
import { PermissionGetUserToWorkGroupRoles$Params } from '../fn/permission/permission-get-user-to-work-group-roles';

@Injectable({ providedIn: 'root' })
export class PermissionApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `permissionGetUserToWorkGroupRoles()` */
  static readonly PermissionGetUserToWorkGroupRolesPath = '/bla-bla-vla/permissions/UserToWorkGroupRoles/{lk}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `permissionGetUserToWorkGroupRoles()` instead.
   *
   * This method doesn't expect any request body.
   */
  permissionGetUserToWorkGroupRoles$Response(params: PermissionGetUserToWorkGroupRoles$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return permissionGetUserToWorkGroupRoles(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `permissionGetUserToWorkGroupRoles$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  permissionGetUserToWorkGroupRoles(params: PermissionGetUserToWorkGroupRoles$Params, context?: HttpContext): Observable<Blob> {
    return this.permissionGetUserToWorkGroupRoles$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}
