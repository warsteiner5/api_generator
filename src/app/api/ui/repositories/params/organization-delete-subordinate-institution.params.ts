import { OrganizationDeleteSubordinateInstitution$Params } from '../../../swagger/fn/organization/organization-delete-subordinate-institution';

export interface OrganizationDeleteSubordinateInstitutionParams {
  relationId: number;
}

export const organizationDeleteSubordinateInstitutionParamsAdapter = {
  adapt(params?: OrganizationDeleteSubordinateInstitutionParams): OrganizationDeleteSubordinateInstitution$Params {
    if (!params) {
      return {} as OrganizationDeleteSubordinateInstitution$Params;
    }
    return {
      relationId: params.relationId,
    };
  }
};
