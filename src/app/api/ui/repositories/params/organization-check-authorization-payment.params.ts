import { OrganizationCheckAuthorizationPayment$Params } from '../../../swagger/fn/organization/organization-check-authorization-payment';

export interface OrganizationCheckAuthorizationPaymentParams {
}

export const organizationCheckAuthorizationPaymentParamsAdapter = {
  adapt(params?: OrganizationCheckAuthorizationPaymentParams): OrganizationCheckAuthorizationPayment$Params {
    if (!params) {
      return {} as OrganizationCheckAuthorizationPayment$Params;
    }
    return {
    };
  }
};
