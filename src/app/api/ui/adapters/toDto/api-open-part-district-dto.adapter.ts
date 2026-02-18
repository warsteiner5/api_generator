import { OpenPartDistrict } from '../../models/open-part-district.interface';
import { ApiOpenPartDistrictDto } from '../../../swagger/models/api-open-part-district-dto';
import { adaptApiDistrictNameEnum } from './api-district-name-enum.adapter';
import { adaptApiOpenPartRegionalShopDto } from './api-open-part-regional-shop-dto.adapter';

export function adaptApiOpenPartDistrictDto(source?: OpenPartDistrict | null): ApiOpenPartDistrictDto {
  return {
    DistrictId: adaptApiDistrictNameEnum(source?.districtId),
    Name: source?.name,
    RegionShops: (source?.regionShops ?? []).map((item) => adaptApiOpenPartRegionalShopDto(item)),
  };
}
