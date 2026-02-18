import { CertificatesParsePost$Params } from '../../../swagger/fn/certificates/certificates-parse-post';

export interface CertificatesParsePostParams {
  employeeId: number;
  body?: string;
}

export const certificatesParsePostParamsAdapter = {
  adapt(params?: CertificatesParsePostParams): CertificatesParsePost$Params {
    if (!params) {
      return {} as CertificatesParsePost$Params;
    }
    return {
      employeeId: params.employeeId,
      body: params.body,
    };
  }
};
