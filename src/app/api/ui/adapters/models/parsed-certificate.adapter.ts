import { ApiParsedCertificateDto } from '../../../swagger/models/api-parsed-certificate-dto';
import { ParsedCertificate } from '../../models/parsed-certificate.interface';
import { certificateAdapter } from './certificate.adapter';

export const parsedCertificateAdapter = (source?: ApiParsedCertificateDto | null): ParsedCertificate => {
  return {
    certificate: source?.Certificate === null ? undefined : certificateAdapter(source?.Certificate),
    errorMessage: source?.ErrorMessage,
    isSuccess: source?.IsSuccess,
  };
}
