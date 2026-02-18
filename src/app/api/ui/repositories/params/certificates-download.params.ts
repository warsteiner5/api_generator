import { CertificatesDownload$Params } from '../../../swagger/fn/certificates/certificates-download';

export interface CertificatesDownloadParams {
  thumbprint: string;
}

export const certificatesDownloadParamsAdapter = {
  adapt(params?: CertificatesDownloadParams): CertificatesDownload$Params {
    if (!params) {
      return {} as CertificatesDownload$Params;
    }
    return {
      thumbprint: params.thumbprint,
    };
  }
};
