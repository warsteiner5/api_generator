import { MarketSearchActionEnum } from '../../enums/market-search-action.enum';
import { ApiMarketSearchActionEnum } from '../../../swagger/models/api-market-search-action-enum';

export function adaptApiMarketSearchActionEnum(source?: MarketSearchActionEnum | null): ApiMarketSearchActionEnum {
  switch (source) {
    case MarketSearchActionEnum.Buy:
      return ApiMarketSearchActionEnum.Buy;
    case MarketSearchActionEnum.Sell:
      return ApiMarketSearchActionEnum.Sell;
    case MarketSearchActionEnum.BuyAndSell:
      return ApiMarketSearchActionEnum.BuyAndSell;
    case MarketSearchActionEnum.SearchInPersonalArea:
      return ApiMarketSearchActionEnum.SearchInPersonalArea;
    case MarketSearchActionEnum.TradePlans:
      return ApiMarketSearchActionEnum.TradePlans;
    case MarketSearchActionEnum.PlannedTrades:
      return ApiMarketSearchActionEnum.PlannedTrades;
    case MarketSearchActionEnum.Pomogator:
      return ApiMarketSearchActionEnum.Pomogator;
    default:
      throw new Error(`Enum value is not defined: MarketSearchActionEnum=${String(source)}`);
  }
}
