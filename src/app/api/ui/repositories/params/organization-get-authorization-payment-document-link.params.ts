import { OrganizationGetAuthorizationPaymentDocumentLink$Params } from '../../../swagger/fn/organization/organization-get-authorization-payment-document-link';

export interface OrganizationGetAuthorizationPaymentDocumentLinkParams {
}

export const organizationGetAuthorizationPaymentDocumentLinkParamsAdapter = {
  adapt(params?: OrganizationGetAuthorizationPaymentDocumentLinkParams): OrganizationGetAuthorizationPaymentDocumentLink$Params {
    if (!params) {
      return {} as OrganizationGetAuthorizationPaymentDocumentLink$Params;
    }
    return {
    };
  }
};
