import { AccountGetAllUsersForOrganization$Params } from '../../../swagger/fn/account/account-get-all-users-for-organization';
import { OrganizationUsersFilterAlt } from '../../models/organization-users-filter-alt.interface';
import { adaptApiOrganizationUsersFilterAltDto } from '../../adapters/toDto/api-organization-users-filter.adapter';

export interface AccountGetAllUsersForOrganizationParams {
  body?: OrganizationUsersFilterAlt;
}

export const accountGetAllUsersForOrganizationParamsAdapter = {
  adapt(params?: AccountGetAllUsersForOrganizationParams): AccountGetAllUsersForOrganization$Params {
    if (!params) {
      return {} as AccountGetAllUsersForOrganization$Params;
    }
    return {
      body: adaptApiOrganizationUsersFilterAltDto(params.body),
    };
  }
};
