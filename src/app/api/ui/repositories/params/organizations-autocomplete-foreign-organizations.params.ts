import { AutocompleteForeignOrganizationsRequestAlt } from '../../models/autocomplete-foreign-organizations-request-alt.interface';
import { OrganizationsAutocompleteForeignOrganizations$Params } from '../../../swagger/fn/organizations/organizations-autocomplete-foreign-organizations';
import { adaptApiAutocompleteForeignOrganizationsRequestAltDto } from '../../adapters/toDto/api-autocomplete-foreign-organizations-request.adapter';

export interface OrganizationsAutocompleteForeignOrganizationsParams {
  body?: AutocompleteForeignOrganizationsRequestAlt;
}

export const organizationsAutocompleteForeignOrganizationsParamsAdapter = {
  adapt(params?: OrganizationsAutocompleteForeignOrganizationsParams): OrganizationsAutocompleteForeignOrganizations$Params {
    if (!params) {
      return {} as OrganizationsAutocompleteForeignOrganizations$Params;
    }
    return {
      body: adaptApiAutocompleteForeignOrganizationsRequestAltDto(params.body),
    };
  }
};
