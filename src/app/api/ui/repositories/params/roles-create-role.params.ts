import { CreateRoleRequestAlt } from '../../models/create-role-request-alt.interface';
import { RolesCreateRole$Params } from '../../../swagger/fn/roles/roles-create-role';
import { apiCreateRoleRequestAltDtoAdapter } from '../../adapters/models/api-create-role-request.adapter';

// @ts-ignore
export interface RolesCreateRoleParams {
  body?: CreateRoleRequestAlt;
}

export function rolesCreateRoleAdapter(params?: RolesCreateRoleParams): RolesCreateRole$Params {
  if (!params) {
    return {} as RolesCreateRole$Params;
  }
  return {
      body: apiCreateRoleRequestAltDtoAdapter(params.body),
  };
}
