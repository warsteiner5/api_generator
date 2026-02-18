import { OrganizationRegistrationEmployee } from '../../models/organization-registration-employee.interface';
import { OrganizationRegistrationGenerateDocumentsLink$Params } from '../../../swagger/fn/organization-registration/organization-registration-generate-documents-link';
import { adaptApiOrganizationRegistrationEmployeeDto } from '../../adapters/toDto/api-organization-registration-employee-dto.adapter';

export interface OrganizationRegistrationGenerateDocumentsLinkParams {
  body?: OrganizationRegistrationEmployee;
}

export const organizationRegistrationGenerateDocumentsLinkParamsAdapter = {
  adapt(params?: OrganizationRegistrationGenerateDocumentsLinkParams): OrganizationRegistrationGenerateDocumentsLink$Params {
    if (!params) {
      return {} as OrganizationRegistrationGenerateDocumentsLink$Params;
    }
    return {
      body: adaptApiOrganizationRegistrationEmployeeDto(params.body),
    };
  }
};
