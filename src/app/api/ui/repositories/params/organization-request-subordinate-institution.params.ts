import { OrganizationRequestSubordinateInstitution$Params } from '../../../swagger/fn/organization/organization-request-subordinate-institution';

export interface OrganizationRequestSubordinateInstitutionParams {
  relationId: number;
}

export const organizationRequestSubordinateInstitutionParamsAdapter = {
  adapt(params?: OrganizationRequestSubordinateInstitutionParams): OrganizationRequestSubordinateInstitution$Params {
    if (!params) {
      return {} as OrganizationRequestSubordinateInstitution$Params;
    }
    return {
      relationId: params.relationId,
    };
  }
};
