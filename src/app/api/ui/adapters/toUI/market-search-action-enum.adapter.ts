import { ApiMarketSearchActionEnum } from '../../../swagger/models/api-market-search-action-enum';
import { MarketSearchActionEnum } from '../../enums/market-search-action.enum';

export function adaptMarketSearchActionEnumToUI(source?: ApiMarketSearchActionEnum | null): MarketSearchActionEnum {
  switch (source) {
    case ApiMarketSearchActionEnum.Buy:
      return MarketSearchActionEnum.Buy;
    case ApiMarketSearchActionEnum.Sell:
      return MarketSearchActionEnum.Sell;
    case ApiMarketSearchActionEnum.BuyAndSell:
      return MarketSearchActionEnum.BuyAndSell;
    case ApiMarketSearchActionEnum.SearchInPersonalArea:
      return MarketSearchActionEnum.SearchInPersonalArea;
    case ApiMarketSearchActionEnum.TradePlans:
      return MarketSearchActionEnum.TradePlans;
    case ApiMarketSearchActionEnum.PlannedTrades:
      return MarketSearchActionEnum.PlannedTrades;
    case ApiMarketSearchActionEnum.Pomogator:
      return MarketSearchActionEnum.Pomogator;
    default:
      throw new Error(`Enum value is not defined: ApiMarketSearchActionEnum=${String(source)}`);
  }
}
