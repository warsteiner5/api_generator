import { ApiParsedCertificateDto } from '../../../swagger/models/api-parsed-certificate-dto';
import { ParsedCertificate } from '../../models/parsed-certificate.interface';
import { adaptCertificateToUI } from './certificate.adapter';

export function adaptParsedCertificateToUI(source?: ApiParsedCertificateDto | null): ParsedCertificate {
  return {
    certificate: adaptCertificateToUI(source?.Certificate),
    errorMessage: source?.ErrorMessage ?? '',
    isSuccess: source?.IsSuccess ?? false,
  };
}
