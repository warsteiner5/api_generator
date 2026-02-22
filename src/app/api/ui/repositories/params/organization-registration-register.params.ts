import { OrganizationRegistration } from '../../models/organization-registration.interface';
import { OrganizationRegistrationRegister$Params } from '../../../swagger/fn/organization-registration/organization-registration-register';
import { apiOrganizationRegistrationDtoAdapter } from '../../adapters/models/api-organization-registration-dto.adapter';

// @ts-ignore
export interface OrganizationRegistrationRegisterParams {
  body?: OrganizationRegistration;
}

export function organizationRegistrationRegisterAdapter(params?: OrganizationRegistrationRegisterParams): OrganizationRegistrationRegister$Params {
  if (!params) {
    return {} as OrganizationRegistrationRegister$Params;
  }
  return {
      body: apiOrganizationRegistrationDtoAdapter(params.body),
  };
}
