import { ManagerAgentGetOrganizationsForAutocomplete$Params } from '../../../swagger/fn/manager-agent/manager-agent-get-organizations-for-autocomplete';
import { OrganizationForAutocompleteFilterAlt } from '../../models/organization-for-autocomplete-filter-alt.interface';
import { adaptApiOrganizationForAutocompleteFilterAltDto } from '../../adapters/toDto/api-organization-for-autocomplete-filter.adapter';

export interface ManagerAgentGetOrganizationsForAutocompleteParams {
  body?: OrganizationForAutocompleteFilterAlt;
}

export const managerAgentGetOrganizationsForAutocompleteParamsAdapter = {
  adapt(params?: ManagerAgentGetOrganizationsForAutocompleteParams): ManagerAgentGetOrganizationsForAutocomplete$Params {
    if (!params) {
      return {} as ManagerAgentGetOrganizationsForAutocomplete$Params;
    }
    return {
      body: adaptApiOrganizationForAutocompleteFilterAltDto(params.body),
    };
  }
};
