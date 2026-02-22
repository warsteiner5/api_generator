import { DistrictNameEnum } from '../enums/district-name.enum';
import { OpenPartRegionalShop } from './open-part-regional-shop.interface';

// @ts-ignore
export interface OpenPartDistrict {
  districtId: DistrictNameEnum;
  name: string;
  regionShops: OpenPartRegionalShop[];
}
