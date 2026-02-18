import { DistrictNameEnum } from '../enums/district-name.enum';
import { OpenPartRegionalShop } from './open-part-regional-shop.interface';

export interface OpenPartDistrict {
  districtId: DistrictNameEnum;
  name: string;
  regionShops: OpenPartRegionalShop[];
}
