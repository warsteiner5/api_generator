import { RolesUpdateRole$Params } from '../../../swagger/fn/roles/roles-update-role';
import { UpdateRoleRequestAlt } from '../../models/update-role-request-alt.interface';
import { adaptApiUpdateRoleRequestAltDto } from '../../adapters/toDto/api-update-role-request.adapter';

export interface RolesUpdateRoleParams {
  id: number;
  body?: UpdateRoleRequestAlt;
}

export const rolesUpdateRoleParamsAdapter = {
  adapt(params?: RolesUpdateRoleParams): RolesUpdateRole$Params {
    if (!params) {
      return {} as RolesUpdateRole$Params;
    }
    return {
      id: params.id,
      body: adaptApiUpdateRoleRequestAltDto(params.body),
    };
  }
};
