import { Certificate } from '../../models/certificate.interface';
import { ApiCertificateDto } from '../../../swagger/models/api-certificate-dto';

export const apiCertificateDtoAdapter = (source?: Certificate | null): ApiCertificateDto => {
  return {
    DateFrom: source?.dateFrom,
    DateTo: source?.dateTo,
    Enable: source?.enable,
    Id: source?.id,
    IsCurrent: source?.isCurrent,
    IssuerOrganization: source?.issuerOrganization,
    PublicKey: source?.publicKey,
    Subject: source?.subject,
    Thumbprint: source?.thumbprint,
  };
}
