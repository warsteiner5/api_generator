import { ManagerAgentGetOrganizationsForAutocomplete$Params } from '../../../swagger/fn/manager-agent/manager-agent-get-organizations-for-autocomplete';
import { OrganizationForAutocompleteFilterAlt } from '../../models/organization-for-autocomplete-filter-alt.interface';
import { apiOrganizationForAutocompleteFilterAltDtoAdapter } from '../../adapters/models/api-organization-for-autocomplete-filter.adapter';

// @ts-ignore
export interface ManagerAgentGetOrganizationsForAutocompleteParams {
  body?: OrganizationForAutocompleteFilterAlt;
}

export function managerAgentGetOrganizationsForAutocompleteAdapter(params?: ManagerAgentGetOrganizationsForAutocompleteParams): ManagerAgentGetOrganizationsForAutocomplete$Params {
  if (!params) {
    return {} as ManagerAgentGetOrganizationsForAutocomplete$Params;
  }
  return {
      body: apiOrganizationForAutocompleteFilterAltDtoAdapter(params.body),
  };
}
