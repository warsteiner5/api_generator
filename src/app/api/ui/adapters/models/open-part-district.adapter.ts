import { ApiOpenPartDistrictDto } from '../../../swagger/models/api-open-part-district-dto';
import { OpenPartDistrict } from '../../models/open-part-district.interface';
import { districtNameEnumAdapter } from '../enums/district-name-enum.adapter';
import { openPartRegionalShopAdapter } from './open-part-regional-shop.adapter';

export const openPartDistrictAdapter = (source?: ApiOpenPartDistrictDto | null): OpenPartDistrict => {
  return {
    districtId: source?.DistrictId === null ? undefined : districtNameEnumAdapter(source?.DistrictId),
    name: source?.Name,
    regionShops: source?.RegionShops?.map((item) => openPartRegionalShopAdapter(item)),
  };
}
