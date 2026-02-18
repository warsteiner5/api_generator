import { ApiPriceListStateEnum } from '../../../swagger/models/api-price-list-state-enum';
import { PriceListStateEnum } from '../../enums/price-list-state.enum';

export function adaptPriceListStateEnumToUI(source?: ApiPriceListStateEnum | null): PriceListStateEnum {
  switch (source) {
    case ApiPriceListStateEnum.NotActive:
      return PriceListStateEnum.NotActive;
    case ApiPriceListStateEnum.Active:
      return PriceListStateEnum.Active;
    case ApiPriceListStateEnum.Removed:
      return PriceListStateEnum.Removed;
    default:
      throw new Error(`Enum value is not defined: ApiPriceListStateEnum=${String(source)}`);
  }
}
