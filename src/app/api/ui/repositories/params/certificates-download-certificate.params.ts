import { CertificatesDownloadCertificate$Params } from '../../../swagger/fn/certificates/certificates-download-certificate';
import { OrganizationContractSideAltEnum } from '../../enums/organization-contract-side-alt.enum';
import { apiOrganizationContractSideAltEnumAdapter } from '../../adapters/enums/api-organization-contract-side.adapter';

// @ts-ignore
export interface CertificatesDownloadCertificateParams {
  dealId: number;
  contractSide: OrganizationContractSideAltEnum;
  fileGuid: string;
}

export function certificatesDownloadCertificateAdapter(params?: CertificatesDownloadCertificateParams): CertificatesDownloadCertificate$Params {
  if (!params) {
    return {} as CertificatesDownloadCertificate$Params;
  }
  return {
      dealId: params.dealId,
      contractSide: apiOrganizationContractSideAltEnumAdapter(params.contractSide),
      fileGuid: params.fileGuid,
  };
}
