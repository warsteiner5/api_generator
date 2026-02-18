import { Certificate } from './certificate.interface';

export interface ParsedCertificate {
  certificate: Certificate;
  errorMessage: string;
  isSuccess: boolean;
}
