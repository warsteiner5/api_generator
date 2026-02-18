import { OrganizationCheckOrgHasEtpAgreement$Params } from '../../../swagger/fn/organization/organization-check-org-has-etp-agreement';

export interface OrganizationCheckOrgHasEtpAgreementParams {
}

export const organizationCheckOrgHasEtpAgreementParamsAdapter = {
  adapt(params?: OrganizationCheckOrgHasEtpAgreementParams): OrganizationCheckOrgHasEtpAgreement$Params {
    if (!params) {
      return {} as OrganizationCheckOrgHasEtpAgreement$Params;
    }
    return {
    };
  }
};
