import { ProductStatusAltEnum } from '../../enums/product-status-alt.enum';
import { ApiProductStatusAltEnum } from '../../../swagger/models/api-product-status';

export function adaptApiProductStatusAltEnum(source?: ProductStatusAltEnum | null): ApiProductStatusAltEnum {
  switch (source) {
    case ProductStatusAltEnum.Active:
      return ApiProductStatusAltEnum.Active;
    case ProductStatusAltEnum.Archive:
      return ApiProductStatusAltEnum.Archive;
    case ProductStatusAltEnum.Draft:
      return ApiProductStatusAltEnum.Draft;
    case ProductStatusAltEnum.Deleted:
      return ApiProductStatusAltEnum.Deleted;
    default:
      throw new Error(`Enum value is not defined: ProductStatusAltEnum=${String(source)}`);
  }
}
