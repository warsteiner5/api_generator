import { OrganizationGetSubordinateInstitutions$Params } from '../../../swagger/fn/organization/organization-get-subordinate-institutions';
import { PartnersFilterAlt } from '../../models/partners-filter-alt.interface';
import { adaptApiPartnersFilterAltDto } from '../../adapters/toDto/api-partners-filter.adapter';

export interface OrganizationGetSubordinateInstitutionsParams {
  body?: PartnersFilterAlt;
}

export const organizationGetSubordinateInstitutionsParamsAdapter = {
  adapt(params?: OrganizationGetSubordinateInstitutionsParams): OrganizationGetSubordinateInstitutions$Params {
    if (!params) {
      return {} as OrganizationGetSubordinateInstitutions$Params;
    }
    return {
      body: adaptApiPartnersFilterAltDto(params.body),
    };
  }
};
