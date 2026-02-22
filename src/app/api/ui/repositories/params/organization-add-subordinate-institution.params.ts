import { OrganizationAddSubordinateInstitution$Params } from '../../../swagger/fn/organization/organization-add-subordinate-institution';
import { SubordinateInstitutionRequestAlt } from '../../models/subordinate-institution-request-alt.interface';
import { apiSubordinateInstitutionRequestAltDtoAdapter } from '../../adapters/models/api-subordinate-institution-request.adapter';

// @ts-ignore
export interface OrganizationAddSubordinateInstitutionParams {
  body?: SubordinateInstitutionRequestAlt;
}

export function organizationAddSubordinateInstitutionAdapter(params?: OrganizationAddSubordinateInstitutionParams): OrganizationAddSubordinateInstitution$Params {
  if (!params) {
    return {} as OrganizationAddSubordinateInstitution$Params;
  }
  return {
      body: apiSubordinateInstitutionRequestAltDtoAdapter(params.body),
  };
}
