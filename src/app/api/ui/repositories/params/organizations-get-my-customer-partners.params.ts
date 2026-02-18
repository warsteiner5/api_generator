import { OrganizationsGetMyCustomerPartners$Params } from '../../../swagger/fn/organizations/organizations-get-my-customer-partners';

export interface OrganizationsGetMyCustomerPartnersParams {
}

export const organizationsGetMyCustomerPartnersParamsAdapter = {
  adapt(params?: OrganizationsGetMyCustomerPartnersParams): OrganizationsGetMyCustomerPartners$Params {
    if (!params) {
      return {} as OrganizationsGetMyCustomerPartners$Params;
    }
    return {
    };
  }
};
