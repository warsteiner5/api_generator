import { MarketJsonResultOfListOfMzPriceListShortInfo } from '../../models/market-json-result-of-list-of-mz-price-list-short-info.interface';
import { ApiMarketJsonResultOfListOfMzPriceListShortInfoDto } from '../../../swagger/models/api-market-json-result-of-list-of-mz-price-list-short-info-dto';

export function adaptApiMarketJsonResultOfListOfMzPriceListShortInfoDto(source?: MarketJsonResultOfListOfMzPriceListShortInfo | null): ApiMarketJsonResultOfListOfMzPriceListShortInfoDto {
  return (source ?? {}) as ApiMarketJsonResultOfListOfMzPriceListShortInfoDto;
}
