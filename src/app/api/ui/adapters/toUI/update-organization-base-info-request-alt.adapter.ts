import { ApiUpdateOrganizationBaseInfoRequestAltDto } from '../../../swagger/models/api-update-organization-base-info-request';
import { UpdateOrganizationBaseInfoRequestAlt } from '../../models/update-organization-base-info-request-alt.interface';

export function adaptUpdateOrganizationBaseInfoRequestAltToUI(source?: ApiUpdateOrganizationBaseInfoRequestAltDto | null): UpdateOrganizationBaseInfoRequestAlt {
  return {
    certificateThumbPrint: source?.CertificateThumbPrint ?? '',
    directorFullName: source?.DirectorFullName ?? '',
    email: source?.Email ?? '',
    fullName: source?.FullName ?? '',
    isSmp: source?.IsSmp ?? false,
    kpp: source?.Kpp ?? '',
    ogrn: source?.Ogrn ?? '',
    ogrnip: source?.Ogrnip ?? '',
    phoneNumber: source?.PhoneNumber ?? '',
    shortName: source?.ShortName ?? '',
    signatureAlgorithmOid: source?.SignatureAlgorithmOid ?? '',
  };
}
