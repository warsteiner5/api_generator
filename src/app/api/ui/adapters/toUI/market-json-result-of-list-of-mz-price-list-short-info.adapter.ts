import { ApiMarketJsonResultOfListOfMzPriceListShortInfoDto } from '../../../swagger/models/api-market-json-result-of-list-of-mz-price-list-short-info-dto';
import { MarketJsonResultOfListOfMzPriceListShortInfo } from '../../models/market-json-result-of-list-of-mz-price-list-short-info.interface';

export function adaptMarketJsonResultOfListOfMzPriceListShortInfoToUI(source?: ApiMarketJsonResultOfListOfMzPriceListShortInfoDto | null): MarketJsonResultOfListOfMzPriceListShortInfo {
  return (source ?? {}) as MarketJsonResultOfListOfMzPriceListShortInfo;
}
