import { CertificatesDownload$Params } from '../../../swagger/fn/certificates/certificates-download';

// @ts-ignore
export interface CertificatesDownloadParams {
  thumbprint: string;
}

export function certificatesDownloadAdapter(params?: CertificatesDownloadParams): CertificatesDownload$Params {
  if (!params) {
    return {} as CertificatesDownload$Params;
  }
  return {
      thumbprint: params.thumbprint,
  };
}
