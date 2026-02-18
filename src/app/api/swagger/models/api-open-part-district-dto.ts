/* tslint:disable */
/* eslint-disable */
import { ApiDistrictNameEnum } from '../models/api-district-name-enum';
import { ApiOpenPartRegionalShopDto } from '../models/api-open-part-regional-shop-dto';
export interface ApiOpenPartDistrictDto {
  DistrictId?: ApiDistrictNameEnum;
  Name?: string | null;
  RegionShops?: Array<ApiOpenPartRegionalShopDto> | null;
}
