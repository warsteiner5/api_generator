import { CreateRoleRequestAlt } from '../../models/create-role-request-alt.interface';
import { RolesCreateRole$Params } from '../../../swagger/fn/roles/roles-create-role';
import { adaptApiCreateRoleRequestAltDto } from '../../adapters/toDto/api-create-role-request.adapter';

export interface RolesCreateRoleParams {
  body?: CreateRoleRequestAlt;
}

export const rolesCreateRoleParamsAdapter = {
  adapt(params?: RolesCreateRoleParams): RolesCreateRole$Params {
    if (!params) {
      return {} as RolesCreateRole$Params;
    }
    return {
      body: adaptApiCreateRoleRequestAltDto(params.body),
    };
  }
};
