import { RolesUpdateRole$Params } from '../../../swagger/fn/roles/roles-update-role';
import { UpdateRoleRequestAlt } from '../../models/update-role-request-alt.interface';
import { apiUpdateRoleRequestAltDtoAdapter } from '../../adapters/models/api-update-role-request.adapter';

// @ts-ignore
export interface RolesUpdateRoleParams {
  id: number;
  body?: UpdateRoleRequestAlt;
}

export function rolesUpdateRoleAdapter(params?: RolesUpdateRoleParams): RolesUpdateRole$Params {
  if (!params) {
    return {} as RolesUpdateRole$Params;
  }
  return {
      id: params.id,
      body: apiUpdateRoleRequestAltDtoAdapter(params.body),
  };
}
