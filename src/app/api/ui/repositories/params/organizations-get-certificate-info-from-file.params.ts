import { OrganizationsGetCertificateInfoFromFile$Params } from '../../../swagger/fn/organizations/organizations-get-certificate-info-from-file';

// @ts-ignore
export interface OrganizationsGetCertificateInfoFromFileParams {
  fileGuid: string;
}

export function organizationsGetCertificateInfoFromFileAdapter(params?: OrganizationsGetCertificateInfoFromFileParams): OrganizationsGetCertificateInfoFromFile$Params {
  if (!params) {
    return {} as OrganizationsGetCertificateInfoFromFile$Params;
  }
  return {
      fileGuid: params.fileGuid,
  };
}
