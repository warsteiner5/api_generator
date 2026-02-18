import { OrganizationsGetCertificateOrganizations$Params } from '../../../swagger/fn/organizations/organizations-get-certificate-organizations';

export interface OrganizationsGetCertificateOrganizationsParams {
  body?: string[];
}

export const organizationsGetCertificateOrganizationsParamsAdapter = {
  adapt(params?: OrganizationsGetCertificateOrganizationsParams): OrganizationsGetCertificateOrganizations$Params {
    if (!params) {
      return {} as OrganizationsGetCertificateOrganizations$Params;
    }
    return {
      body: params.body,
    };
  }
};
