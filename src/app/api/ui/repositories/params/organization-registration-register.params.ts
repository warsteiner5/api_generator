import { OrganizationRegistration } from '../../models/organization-registration.interface';
import { OrganizationRegistrationRegister$Params } from '../../../swagger/fn/organization-registration/organization-registration-register';
import { adaptApiOrganizationRegistrationDto } from '../../adapters/toDto/api-organization-registration-dto.adapter';

export interface OrganizationRegistrationRegisterParams {
  body?: OrganizationRegistration;
}

export const organizationRegistrationRegisterParamsAdapter = {
  adapt(params?: OrganizationRegistrationRegisterParams): OrganizationRegistrationRegister$Params {
    if (!params) {
      return {} as OrganizationRegistrationRegister$Params;
    }
    return {
      body: adaptApiOrganizationRegistrationDto(params.body),
    };
  }
};
