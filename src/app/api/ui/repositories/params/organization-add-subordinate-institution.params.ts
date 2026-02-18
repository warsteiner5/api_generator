import { OrganizationAddSubordinateInstitution$Params } from '../../../swagger/fn/organization/organization-add-subordinate-institution';
import { SubordinateInstitutionRequestAlt } from '../../models/subordinate-institution-request-alt.interface';
import { adaptApiSubordinateInstitutionRequestAltDto } from '../../adapters/toDto/api-subordinate-institution-request.adapter';

export interface OrganizationAddSubordinateInstitutionParams {
  body?: SubordinateInstitutionRequestAlt;
}

export const organizationAddSubordinateInstitutionParamsAdapter = {
  adapt(params?: OrganizationAddSubordinateInstitutionParams): OrganizationAddSubordinateInstitution$Params {
    if (!params) {
      return {} as OrganizationAddSubordinateInstitution$Params;
    }
    return {
      body: adaptApiSubordinateInstitutionRequestAltDto(params.body),
    };
  }
};
