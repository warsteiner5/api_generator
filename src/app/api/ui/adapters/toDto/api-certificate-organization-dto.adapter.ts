import { CertificateOrganization } from '../../models/certificate-organization.interface';
import { ApiCertificateOrganizationDto } from '../../../swagger/models/api-certificate-organization-dto';

export function adaptApiCertificateOrganizationDto(source?: CertificateOrganization | null): ApiCertificateOrganizationDto {
  return {
    CertThumb: source?.certThumb,
    OrganizationName: source?.organizationName,
  };
}
