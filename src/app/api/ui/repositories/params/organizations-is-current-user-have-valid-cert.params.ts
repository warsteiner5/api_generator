import { OrganizationsIsCurrentUserHaveValidCert$Params } from '../../../swagger/fn/organizations/organizations-is-current-user-have-valid-cert';

export interface OrganizationsIsCurrentUserHaveValidCertParams {
}

export const organizationsIsCurrentUserHaveValidCertParamsAdapter = {
  adapt(params?: OrganizationsIsCurrentUserHaveValidCertParams): OrganizationsIsCurrentUserHaveValidCert$Params {
    if (!params) {
      return {} as OrganizationsIsCurrentUserHaveValidCert$Params;
    }
    return {
    };
  }
};
