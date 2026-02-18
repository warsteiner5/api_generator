import { OrganizationWithAddressShortInfo } from '../../models/organization-with-address-short-info.interface';
import { ApiOrganizationWithAddressShortInfoDto } from '../../../swagger/models/api-organization-with-address-short-info-dto';

export function adaptApiOrganizationWithAddressShortInfoDto(source?: OrganizationWithAddressShortInfo | null): ApiOrganizationWithAddressShortInfoDto {
  return {
    FullName: source?.fullName,
    Id: source?.id,
    Inn: source?.inn,
    KladrCodeRegionRF: source?.kladrCodeRegionRF,
    Kpp: source?.kpp,
    Name: source?.name,
    RegionRF: source?.regionRF,
  };
}
