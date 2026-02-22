import { TradeBiddingTypeEnum } from '../../enums/trade-bidding-type.enum';
import { ApiTradeBiddingTypeEnum } from '../../../swagger/models/api-trade-bidding-type-enum';

export const apiTradeBiddingTypeEnumAdapter = (source?: TradeBiddingTypeEnum | null): ApiTradeBiddingTypeEnum => {
  switch (source) {
    case TradeBiddingTypeEnum.LotPrice:
      return ApiTradeBiddingTypeEnum.LotPrice;
    case TradeBiddingTypeEnum.LotItemsPrice:
      return ApiTradeBiddingTypeEnum.LotItemsPrice;
    case TradeBiddingTypeEnum.InterestRate:
      return ApiTradeBiddingTypeEnum.InterestRate;
    default:
      throw new Error(`Enum value is not defined: TradeBiddingTypeEnum=${String(source)}`);
  }
}
