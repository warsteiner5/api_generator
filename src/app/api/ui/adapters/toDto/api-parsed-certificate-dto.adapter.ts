import { ParsedCertificate } from '../../models/parsed-certificate.interface';
import { ApiParsedCertificateDto } from '../../../swagger/models/api-parsed-certificate-dto';
import { adaptApiCertificateDto } from './api-certificate-dto.adapter';

export function adaptApiParsedCertificateDto(source?: ParsedCertificate | null): ApiParsedCertificateDto {
  return {
    Certificate: adaptApiCertificateDto(source?.certificate),
    ErrorMessage: source?.errorMessage,
    IsSuccess: source?.isSuccess,
  };
}
