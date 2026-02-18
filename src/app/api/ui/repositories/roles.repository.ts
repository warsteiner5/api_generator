import { adaptRoleDetailResponseAltToUI } from '../adapters/toUI/role-detail-response-alt.adapter';
import { adaptRoleItemResponseToUI } from '../adapters/toUI/role-item-response.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RoleDetailResponseAlt } from '../models/role-detail-response-alt.interface';
import { RoleItemResponse } from '../models/role-item-response.interface';
import { RolesActivateRoleParams, rolesActivateRoleParamsAdapter } from './params/roles-activate-role.params';
import { RolesApiService } from '../../swagger/services/roles-api.service';
import { RolesCreateRoleParams, rolesCreateRoleParamsAdapter } from './params/roles-create-role.params';
import { RolesDeactivateRoleParams, rolesDeactivateRoleParamsAdapter } from './params/roles-deactivate-role.params';
import { RolesDeleteRoleParams, rolesDeleteRoleParamsAdapter } from './params/roles-delete-role.params';
import { RolesGetRoleInitialParams, rolesGetRoleInitialParamsAdapter } from './params/roles-get-role-initial.params';
import { RolesGetRoleParams, rolesGetRoleParamsAdapter } from './params/roles-get-role.params';
import { RolesSearchRolesParams, rolesSearchRolesParamsAdapter } from './params/roles-search-roles.params';
import { RolesUpdateRoleParams, rolesUpdateRoleParamsAdapter } from './params/roles-update-role.params';

@Injectable({ providedIn: 'root' })
export class RolesRepository {
  private readonly _api = inject(RolesApiService);

  rolesActivateRole(params: RolesActivateRoleParams): Observable<Blob> {
    return this._api.rolesActivateRole(rolesActivateRoleParamsAdapter.adapt(params));
  }

  rolesCreateRole(params?: RolesCreateRoleParams): Observable<number> {
    return this._api.rolesCreateRole(rolesCreateRoleParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  rolesDeactivateRole(params: RolesDeactivateRoleParams): Observable<Blob> {
    return this._api.rolesDeactivateRole(rolesDeactivateRoleParamsAdapter.adapt(params));
  }

  rolesDeleteRole(params: RolesDeleteRoleParams): Observable<Blob> {
    return this._api.rolesDeleteRole(rolesDeleteRoleParamsAdapter.adapt(params));
  }

  rolesGetRole(params: RolesGetRoleParams): Observable<RoleDetailResponseAlt> {
    return this._api.rolesGetRole(rolesGetRoleParamsAdapter.adapt(params)).pipe(
      map((res) => adaptRoleDetailResponseAltToUI(res?.data))
    );
  }

  rolesGetRoleInitial(params?: RolesGetRoleInitialParams): Observable<RoleDetailResponseAlt> {
    return this._api.rolesGetRoleInitial(rolesGetRoleInitialParamsAdapter.adapt(params)).pipe(
      map((res) => adaptRoleDetailResponseAltToUI(res?.data))
    );
  }

  rolesSearchRoles(params?: RolesSearchRolesParams): Observable<RoleItemResponse[]> {
    return this._api.rolesSearchRoles(rolesSearchRolesParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptRoleItemResponseToUI(item)))
    );
  }

  rolesUpdateRole(params: RolesUpdateRoleParams): Observable<Blob> {
    return this._api.rolesUpdateRole(rolesUpdateRoleParamsAdapter.adapt(params));
  }

}
