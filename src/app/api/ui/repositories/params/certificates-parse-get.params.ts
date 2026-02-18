import { CertificatesParseGet$Params } from '../../../swagger/fn/certificates/certificates-parse-get';

export interface CertificatesParseGetParams {
  employeeId: number;
  fileGuid: string;
}

export const certificatesParseGetParamsAdapter = {
  adapt(params?: CertificatesParseGetParams): CertificatesParseGet$Params {
    if (!params) {
      return {} as CertificatesParseGet$Params;
    }
    return {
      employeeId: params.employeeId,
      fileGuid: params.fileGuid,
    };
  }
};
