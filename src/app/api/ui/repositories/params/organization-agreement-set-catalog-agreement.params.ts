import { OrganizationAgreementSetCatalogAgreement$Params } from '../../../swagger/fn/organization-agreement/organization-agreement-set-catalog-agreement';

export interface OrganizationAgreementSetCatalogAgreementParams {
}

export const organizationAgreementSetCatalogAgreementParamsAdapter = {
  adapt(params?: OrganizationAgreementSetCatalogAgreementParams): OrganizationAgreementSetCatalogAgreement$Params {
    if (!params) {
      return {} as OrganizationAgreementSetCatalogAgreement$Params;
    }
    return {
    };
  }
};
