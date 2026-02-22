import { OrganizationDeleteSubordinateInstitution$Params } from '../../../swagger/fn/organization/organization-delete-subordinate-institution';

// @ts-ignore
export interface OrganizationDeleteSubordinateInstitutionParams {
  relationId: number;
}

export function organizationDeleteSubordinateInstitutionAdapter(params?: OrganizationDeleteSubordinateInstitutionParams): OrganizationDeleteSubordinateInstitution$Params {
  if (!params) {
    return {} as OrganizationDeleteSubordinateInstitution$Params;
  }
  return {
      relationId: params.relationId,
  };
}
