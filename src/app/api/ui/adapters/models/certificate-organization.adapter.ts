import { ApiCertificateOrganizationDto } from '../../../swagger/models/api-certificate-organization-dto';
import { CertificateOrganization } from '../../models/certificate-organization.interface';

export const certificateOrganizationAdapter = (source?: ApiCertificateOrganizationDto | null): CertificateOrganization => {
  return {
    certThumb: source?.CertThumb,
    organizationName: source?.OrganizationName,
  };
}
