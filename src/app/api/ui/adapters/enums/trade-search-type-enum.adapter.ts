import { ApiTradeSearchTypeEnum } from '../../../swagger/models/api-trade-search-type-enum';
import { TradeSearchTypeEnum } from '../../enums/trade-search-type.enum';

export const tradeSearchTypeEnumAdapter = (source?: ApiTradeSearchTypeEnum | null): TradeSearchTypeEnum => {
  switch (source) {
    case ApiTradeSearchTypeEnum.All:
      return TradeSearchTypeEnum.All;
    case ApiTradeSearchTypeEnum.OnlyMy:
      return TradeSearchTypeEnum.OnlyMy;
    case ApiTradeSearchTypeEnum.OnlySubordinate:
      return TradeSearchTypeEnum.OnlySubordinate;
    default:
      throw new Error(`Enum value is not defined: ApiTradeSearchTypeEnum=${String(source)}`);
  }
}
