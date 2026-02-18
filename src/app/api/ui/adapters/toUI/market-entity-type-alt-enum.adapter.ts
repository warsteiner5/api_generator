import { ApiMarketEntityTypeAltEnum } from '../../../swagger/models/api-market-entity-type';
import { MarketEntityTypeAltEnum } from '../../enums/market-entity-type-alt.enum';

export function adaptMarketEntityTypeAltEnumToUI(source?: ApiMarketEntityTypeAltEnum | null): MarketEntityTypeAltEnum {
  switch (source) {
    case ApiMarketEntityTypeAltEnum.Trade:
      return MarketEntityTypeAltEnum.Trade;
    case ApiMarketEntityTypeAltEnum.Offer:
      return MarketEntityTypeAltEnum.Offer;
    case ApiMarketEntityTypeAltEnum.Contract:
      return MarketEntityTypeAltEnum.Contract;
    default:
      throw new Error(`Enum value is not defined: ApiMarketEntityTypeAltEnum=${String(source)}`);
  }
}
