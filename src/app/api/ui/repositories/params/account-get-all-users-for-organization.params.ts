import { AccountGetAllUsersForOrganization$Params } from '../../../swagger/fn/account/account-get-all-users-for-organization';
import { OrganizationUsersFilterAlt } from '../../models/organization-users-filter-alt.interface';
import { apiOrganizationUsersFilterAltDtoAdapter } from '../../adapters/models/api-organization-users-filter.adapter';

// @ts-ignore
export interface AccountGetAllUsersForOrganizationParams {
  body?: OrganizationUsersFilterAlt;
}

export function accountGetAllUsersForOrganizationAdapter(params?: AccountGetAllUsersForOrganizationParams): AccountGetAllUsersForOrganization$Params {
  if (!params) {
    return {} as AccountGetAllUsersForOrganization$Params;
  }
  return {
      body: apiOrganizationUsersFilterAltDtoAdapter(params.body),
  };
}
