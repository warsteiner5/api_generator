import { OrganizationsGetCertificateOrganizations$Params } from '../../../swagger/fn/organizations/organizations-get-certificate-organizations';

// @ts-ignore
export interface OrganizationsGetCertificateOrganizationsParams {
  body?: string[];
}

export function organizationsGetCertificateOrganizationsAdapter(params?: OrganizationsGetCertificateOrganizationsParams): OrganizationsGetCertificateOrganizations$Params {
  if (!params) {
    return {} as OrganizationsGetCertificateOrganizations$Params;
  }
  return {
      body: params.body,
  };
}
