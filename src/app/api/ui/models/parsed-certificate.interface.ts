import { Certificate } from './certificate.interface';

// @ts-ignore
export interface ParsedCertificate {
  certificate: Certificate;
  errorMessage: string;
  isSuccess: boolean;
}
