import { CertificatesParseGet$Params } from '../../../swagger/fn/certificates/certificates-parse-get';

// @ts-ignore
export interface CertificatesParseGetParams {
  employeeId: number;
  fileGuid: string;
}

export function certificatesParseGetAdapter(params?: CertificatesParseGetParams): CertificatesParseGet$Params {
  if (!params) {
    return {} as CertificatesParseGet$Params;
  }
  return {
      employeeId: params.employeeId,
      fileGuid: params.fileGuid,
  };
}
