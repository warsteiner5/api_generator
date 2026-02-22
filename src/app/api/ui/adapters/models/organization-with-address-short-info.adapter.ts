import { ApiOrganizationWithAddressShortInfoDto } from '../../../swagger/models/api-organization-with-address-short-info-dto';
import { OrganizationWithAddressShortInfo } from '../../models/organization-with-address-short-info.interface';

export const organizationWithAddressShortInfoAdapter = (source?: ApiOrganizationWithAddressShortInfoDto | null): OrganizationWithAddressShortInfo => {
  return {
    fullName: source?.FullName,
    id: source?.Id,
    inn: source?.Inn,
    kladrCodeRegionRF: source?.KladrCodeRegionRF,
    kpp: source?.Kpp,
    name: source?.Name,
    regionRF: source?.RegionRF,
  };
}
