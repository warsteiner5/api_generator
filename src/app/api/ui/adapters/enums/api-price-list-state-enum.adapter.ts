import { PriceListStateEnum } from '../../enums/price-list-state.enum';
import { ApiPriceListStateEnum } from '../../../swagger/models/api-price-list-state-enum';

export const apiPriceListStateEnumAdapter = (source?: PriceListStateEnum | null): ApiPriceListStateEnum => {
  switch (source) {
    case PriceListStateEnum.NotActive:
      return ApiPriceListStateEnum.NotActive;
    case PriceListStateEnum.Active:
      return ApiPriceListStateEnum.Active;
    case PriceListStateEnum.Removed:
      return ApiPriceListStateEnum.Removed;
    default:
      throw new Error(`Enum value is not defined: PriceListStateEnum=${String(source)}`);
  }
}
