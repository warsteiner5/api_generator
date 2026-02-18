import { ApiProductStatusAltEnum } from '../../../swagger/models/api-product-status';
import { ProductStatusAltEnum } from '../../enums/product-status-alt.enum';

export function adaptProductStatusAltEnumToUI(source?: ApiProductStatusAltEnum | null): ProductStatusAltEnum {
  switch (source) {
    case ApiProductStatusAltEnum.Active:
      return ProductStatusAltEnum.Active;
    case ApiProductStatusAltEnum.Archive:
      return ProductStatusAltEnum.Archive;
    case ApiProductStatusAltEnum.Draft:
      return ProductStatusAltEnum.Draft;
    case ApiProductStatusAltEnum.Deleted:
      return ProductStatusAltEnum.Deleted;
    default:
      throw new Error(`Enum value is not defined: ApiProductStatusAltEnum=${String(source)}`);
  }
}
