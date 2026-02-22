import { RolesSearchRoles$Params } from '../../../swagger/fn/roles/roles-search-roles';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface RolesSearchRolesParams {
  body?: SearchObjectAlt;
}

export function rolesSearchRolesAdapter(params?: RolesSearchRolesParams): RolesSearchRoles$Params {
  if (!params) {
    return {} as RolesSearchRoles$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}
