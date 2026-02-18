import { MarketEntityTypeAltEnum } from '../../enums/market-entity-type-alt.enum';
import { ApiMarketEntityTypeAltEnum } from '../../../swagger/models/api-market-entity-type';

export function adaptApiMarketEntityTypeAltEnum(source?: MarketEntityTypeAltEnum | null): ApiMarketEntityTypeAltEnum {
  switch (source) {
    case MarketEntityTypeAltEnum.Trade:
      return ApiMarketEntityTypeAltEnum.Trade;
    case MarketEntityTypeAltEnum.Offer:
      return ApiMarketEntityTypeAltEnum.Offer;
    case MarketEntityTypeAltEnum.Contract:
      return ApiMarketEntityTypeAltEnum.Contract;
    default:
      throw new Error(`Enum value is not defined: MarketEntityTypeAltEnum=${String(source)}`);
  }
}
