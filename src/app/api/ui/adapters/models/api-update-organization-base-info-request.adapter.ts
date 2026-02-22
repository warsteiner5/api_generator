import { UpdateOrganizationBaseInfoRequestAlt } from '../../models/update-organization-base-info-request-alt.interface';
import { ApiUpdateOrganizationBaseInfoRequestAltDto } from '../../../swagger/models/api-update-organization-base-info-request';

export const apiUpdateOrganizationBaseInfoRequestAltDtoAdapter = (source?: UpdateOrganizationBaseInfoRequestAlt | null): ApiUpdateOrganizationBaseInfoRequestAltDto => {
  return {
    CertificateThumbPrint: source?.certificateThumbPrint,
    DirectorFullName: source?.directorFullName,
    Email: source?.email,
    FullName: source?.fullName,
    IsSmp: source?.isSmp,
    Kpp: source?.kpp,
    Ogrn: source?.ogrn,
    Ogrnip: source?.ogrnip,
    PhoneNumber: source?.phoneNumber,
    ShortName: source?.shortName,
    SignatureAlgorithmOid: source?.signatureAlgorithmOid,
  };
}
