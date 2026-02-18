import { RolesSearchRoles$Params } from '../../../swagger/fn/roles/roles-search-roles';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface RolesSearchRolesParams {
  body?: SearchObjectAlt;
}

export const rolesSearchRolesParamsAdapter = {
  adapt(params?: RolesSearchRolesParams): RolesSearchRoles$Params {
    if (!params) {
      return {} as RolesSearchRoles$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};
