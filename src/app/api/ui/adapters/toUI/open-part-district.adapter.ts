import { ApiOpenPartDistrictDto } from '../../../swagger/models/api-open-part-district-dto';
import { OpenPartDistrict } from '../../models/open-part-district.interface';
import { adaptDistrictNameEnumToUI } from './district-name-enum.adapter';
import { adaptOpenPartRegionalShopToUI } from './open-part-regional-shop.adapter';

export function adaptOpenPartDistrictToUI(source?: ApiOpenPartDistrictDto | null): OpenPartDistrict {
  return {
    districtId: adaptDistrictNameEnumToUI(source?.DistrictId),
    name: source?.Name ?? '',
    regionShops: (source?.RegionShops ?? []).map((item) => adaptOpenPartRegionalShopToUI(item)),
  };
}
