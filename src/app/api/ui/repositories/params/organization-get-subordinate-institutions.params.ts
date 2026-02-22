import { OrganizationGetSubordinateInstitutions$Params } from '../../../swagger/fn/organization/organization-get-subordinate-institutions';
import { PartnersFilterAlt } from '../../models/partners-filter-alt.interface';
import { apiPartnersFilterAltDtoAdapter } from '../../adapters/models/api-partners-filter.adapter';

// @ts-ignore
export interface OrganizationGetSubordinateInstitutionsParams {
  body?: PartnersFilterAlt;
}

export function organizationGetSubordinateInstitutionsAdapter(params?: OrganizationGetSubordinateInstitutionsParams): OrganizationGetSubordinateInstitutions$Params {
  if (!params) {
    return {} as OrganizationGetSubordinateInstitutions$Params;
  }
  return {
      body: apiPartnersFilterAltDtoAdapter(params.body),
  };
}
