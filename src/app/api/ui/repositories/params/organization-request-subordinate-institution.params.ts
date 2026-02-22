import { OrganizationRequestSubordinateInstitution$Params } from '../../../swagger/fn/organization/organization-request-subordinate-institution';

// @ts-ignore
export interface OrganizationRequestSubordinateInstitutionParams {
  relationId: number;
}

export function organizationRequestSubordinateInstitutionAdapter(params?: OrganizationRequestSubordinateInstitutionParams): OrganizationRequestSubordinateInstitution$Params {
  if (!params) {
    return {} as OrganizationRequestSubordinateInstitution$Params;
  }
  return {
      relationId: params.relationId,
  };
}
