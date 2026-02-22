import { CertificatesParsePost$Params } from '../../../swagger/fn/certificates/certificates-parse-post';

// @ts-ignore
export interface CertificatesParsePostParams {
  employeeId: number;
  body?: string;
}

export function certificatesParsePostAdapter(params?: CertificatesParsePostParams): CertificatesParsePost$Params {
  if (!params) {
    return {} as CertificatesParsePost$Params;
  }
  return {
      employeeId: params.employeeId,
      body: params.body,
  };
}
