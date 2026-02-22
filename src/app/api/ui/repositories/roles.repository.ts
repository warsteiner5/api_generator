import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RoleDetailResponseAlt } from '../models/role-detail-response-alt.interface';
import { roleDetailResponseAltAdapter } from '../adapters/models/role-detail-response-alt.adapter';
import { RoleItemResponse } from '../models/role-item-response.interface';
import { roleItemResponseAdapter } from '../adapters/models/role-item-response.adapter';
import { RolesActivateRoleParams, rolesActivateRoleAdapter } from './params/roles-activate-role.params';
import { RolesApiService } from '../../swagger/services/roles-api.service';
import { RolesCreateRoleParams, rolesCreateRoleAdapter } from './params/roles-create-role.params';
import { RolesDeactivateRoleParams, rolesDeactivateRoleAdapter } from './params/roles-deactivate-role.params';
import { RolesDeleteRoleParams, rolesDeleteRoleAdapter } from './params/roles-delete-role.params';
import { RolesGetRoleInitialParams, rolesGetRoleInitialAdapter } from './params/roles-get-role-initial.params';
import { RolesGetRoleParams, rolesGetRoleAdapter } from './params/roles-get-role.params';
import { RolesSearchRolesParams, rolesSearchRolesAdapter } from './params/roles-search-roles.params';
import { RolesUpdateRoleParams, rolesUpdateRoleAdapter } from './params/roles-update-role.params';

@Injectable({ providedIn: 'root' })
export class RolesRepository {
  private readonly _api = inject(RolesApiService);

  rolesActivateRole(params: RolesActivateRoleParams): Observable<Blob> {
    return this._api.rolesActivateRole(rolesActivateRoleAdapter(params));
  }

  rolesCreateRole(params?: RolesCreateRoleParams): Observable<number> {
    return this._api.rolesCreateRole(rolesCreateRoleAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  rolesDeactivateRole(params: RolesDeactivateRoleParams): Observable<Blob> {
    return this._api.rolesDeactivateRole(rolesDeactivateRoleAdapter(params));
  }

  rolesDeleteRole(params: RolesDeleteRoleParams): Observable<Blob> {
    return this._api.rolesDeleteRole(rolesDeleteRoleAdapter(params));
  }

  rolesGetRole(params: RolesGetRoleParams): Observable<RoleDetailResponseAlt> {
    return this._api.rolesGetRole(rolesGetRoleAdapter(params)).pipe(
      map((res) => roleDetailResponseAltAdapter(res?.data))
    );
  }

  rolesGetRoleInitial(params?: RolesGetRoleInitialParams): Observable<RoleDetailResponseAlt> {
    return this._api.rolesGetRoleInitial(rolesGetRoleInitialAdapter(params)).pipe(
      map((res) => roleDetailResponseAltAdapter(res?.data))
    );
  }

  rolesSearchRoles(params?: RolesSearchRolesParams): Observable<RoleItemResponse[]> {
    return this._api.rolesSearchRoles(rolesSearchRolesAdapter(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => roleItemResponseAdapter(item)))
    );
  }

  rolesUpdateRole(params: RolesUpdateRoleParams): Observable<Blob> {
    return this._api.rolesUpdateRole(rolesUpdateRoleAdapter(params));
  }

}
