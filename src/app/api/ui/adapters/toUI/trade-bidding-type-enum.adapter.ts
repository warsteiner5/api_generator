import { ApiTradeBiddingTypeEnum } from '../../../swagger/models/api-trade-bidding-type-enum';
import { TradeBiddingTypeEnum } from '../../enums/trade-bidding-type.enum';

export function adaptTradeBiddingTypeEnumToUI(source?: ApiTradeBiddingTypeEnum | null): TradeBiddingTypeEnum {
  switch (source) {
    case ApiTradeBiddingTypeEnum.LotPrice:
      return TradeBiddingTypeEnum.LotPrice;
    case ApiTradeBiddingTypeEnum.LotItemsPrice:
      return TradeBiddingTypeEnum.LotItemsPrice;
    case ApiTradeBiddingTypeEnum.InterestRate:
      return TradeBiddingTypeEnum.InterestRate;
    default:
      throw new Error(`Enum value is not defined: ApiTradeBiddingTypeEnum=${String(source)}`);
  }
}
