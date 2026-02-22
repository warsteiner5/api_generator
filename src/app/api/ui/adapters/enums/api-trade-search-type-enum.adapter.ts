import { TradeSearchTypeEnum } from '../../enums/trade-search-type.enum';
import { ApiTradeSearchTypeEnum } from '../../../swagger/models/api-trade-search-type-enum';

export const apiTradeSearchTypeEnumAdapter = (source?: TradeSearchTypeEnum | null): ApiTradeSearchTypeEnum => {
  switch (source) {
    case TradeSearchTypeEnum.All:
      return ApiTradeSearchTypeEnum.All;
    case TradeSearchTypeEnum.OnlyMy:
      return ApiTradeSearchTypeEnum.OnlyMy;
    case TradeSearchTypeEnum.OnlySubordinate:
      return ApiTradeSearchTypeEnum.OnlySubordinate;
    default:
      throw new Error(`Enum value is not defined: TradeSearchTypeEnum=${String(source)}`);
  }
}
