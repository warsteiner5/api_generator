import { OrganizationRegistrationEmployee } from '../../models/organization-registration-employee.interface';
import { OrganizationRegistrationGenerateDocumentsLink$Params } from '../../../swagger/fn/organization-registration/organization-registration-generate-documents-link';
import { apiOrganizationRegistrationEmployeeDtoAdapter } from '../../adapters/models/api-organization-registration-employee-dto.adapter';

// @ts-ignore
export interface OrganizationRegistrationGenerateDocumentsLinkParams {
  body?: OrganizationRegistrationEmployee;
}

export function organizationRegistrationGenerateDocumentsLinkAdapter(params?: OrganizationRegistrationGenerateDocumentsLinkParams): OrganizationRegistrationGenerateDocumentsLink$Params {
  if (!params) {
    return {} as OrganizationRegistrationGenerateDocumentsLink$Params;
  }
  return {
      body: apiOrganizationRegistrationEmployeeDtoAdapter(params.body),
  };
}
