import { CertificatesDownloadCertificate$Params } from '../../../swagger/fn/certificates/certificates-download-certificate';
import { OrganizationContractSideAltEnum } from '../../enums/organization-contract-side-alt.enum';
import { adaptApiOrganizationContractSideAltEnum } from '../../adapters/toDto/api-organization-contract-side.adapter';

export interface CertificatesDownloadCertificateParams {
  dealId: number;
  contractSide: OrganizationContractSideAltEnum;
  fileGuid: string;
}

export const certificatesDownloadCertificateParamsAdapter = {
  adapt(params?: CertificatesDownloadCertificateParams): CertificatesDownloadCertificate$Params {
    if (!params) {
      return {} as CertificatesDownloadCertificate$Params;
    }
    return {
      dealId: params.dealId,
      contractSide: adaptApiOrganizationContractSideAltEnum(params.contractSide),
      fileGuid: params.fileGuid,
    };
  }
};
