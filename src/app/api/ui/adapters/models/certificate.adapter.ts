import { ApiCertificateDto } from '../../../swagger/models/api-certificate-dto';
import { Certificate } from '../../models/certificate.interface';

export const certificateAdapter = (source?: ApiCertificateDto | null): Certificate => {
  return {
    dateFrom: source?.DateFrom,
    dateTo: source?.DateTo,
    enable: source?.Enable,
    id: source?.Id,
    isCurrent: source?.IsCurrent,
    issuerOrganization: source?.IssuerOrganization,
    publicKey: source?.PublicKey,
    subject: source?.Subject,
    thumbprint: source?.Thumbprint,
  };
}
