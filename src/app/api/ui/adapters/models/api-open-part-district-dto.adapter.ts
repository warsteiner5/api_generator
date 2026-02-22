import { OpenPartDistrict } from '../../models/open-part-district.interface';
import { ApiOpenPartDistrictDto } from '../../../swagger/models/api-open-part-district-dto';
import { apiDistrictNameEnumAdapter } from '../enums/api-district-name-enum.adapter';
import { apiOpenPartRegionalShopDtoAdapter } from './api-open-part-regional-shop-dto.adapter';

export const apiOpenPartDistrictDtoAdapter = (source?: OpenPartDistrict | null): ApiOpenPartDistrictDto => {
  return {
    DistrictId: source?.districtId === null ? undefined : apiDistrictNameEnumAdapter(source?.districtId),
    Name: source?.name,
    RegionShops: source?.regionShops?.map((item) => apiOpenPartRegionalShopDtoAdapter(item)),
  };
}
