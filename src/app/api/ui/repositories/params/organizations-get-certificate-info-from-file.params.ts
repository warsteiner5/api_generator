import { OrganizationsGetCertificateInfoFromFile$Params } from '../../../swagger/fn/organizations/organizations-get-certificate-info-from-file';

export interface OrganizationsGetCertificateInfoFromFileParams {
  fileGuid: string;
}

export const organizationsGetCertificateInfoFromFileParamsAdapter = {
  adapt(params?: OrganizationsGetCertificateInfoFromFileParams): OrganizationsGetCertificateInfoFromFile$Params {
    if (!params) {
      return {} as OrganizationsGetCertificateInfoFromFile$Params;
    }
    return {
      fileGuid: params.fileGuid,
    };
  }
};
