import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PermissionApiService } from '../../swagger/services/permission-api.service';
import { PermissionGetUserToWorkGroupRolesParams, permissionGetUserToWorkGroupRolesAdapter } from './params/permission-get-user-to-work-group-roles.params';

@Injectable({ providedIn: 'root' })
export class PermissionRepository {
  private readonly _api = inject(PermissionApiService);

  permissionGetUserToWorkGroupRoles(params: PermissionGetUserToWorkGroupRolesParams): Observable<Blob> {
    return this._api.permissionGetUserToWorkGroupRoles(permissionGetUserToWorkGroupRolesAdapter(params));
  }

}
