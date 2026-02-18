import { ApiCertificateDto } from '../../../swagger/models/api-certificate-dto';
import { Certificate } from '../../models/certificate.interface';

export function adaptCertificateToUI(source?: ApiCertificateDto | null): Certificate {
  return {
    dateFrom: source?.DateFrom ?? '',
    dateTo: source?.DateTo ?? '',
    enable: source?.Enable ?? false,
    id: source?.Id ?? 0,
    isCurrent: source?.IsCurrent ?? false,
    issuerOrganization: source?.IssuerOrganization ?? '',
    publicKey: source?.PublicKey ?? '',
    subject: source?.Subject ?? '',
    thumbprint: source?.Thumbprint ?? '',
  };
}
