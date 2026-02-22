import { ParsedCertificate } from '../../models/parsed-certificate.interface';
import { ApiParsedCertificateDto } from '../../../swagger/models/api-parsed-certificate-dto';
import { apiCertificateDtoAdapter } from './api-certificate-dto.adapter';

export const apiParsedCertificateDtoAdapter = (source?: ParsedCertificate | null): ApiParsedCertificateDto => {
  return {
    Certificate: source?.certificate === null ? undefined : apiCertificateDtoAdapter(source?.certificate),
    ErrorMessage: source?.errorMessage,
    IsSuccess: source?.isSuccess,
  };
}
