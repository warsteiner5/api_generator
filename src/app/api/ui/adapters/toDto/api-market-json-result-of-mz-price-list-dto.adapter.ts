import { MarketJsonResultOfMzPriceList } from '../../models/market-json-result-of-mz-price-list.interface';
import { ApiMarketJsonResultOfMzPriceListDto } from '../../../swagger/models/api-market-json-result-of-mz-price-list-dto';

export function adaptApiMarketJsonResultOfMzPriceListDto(source?: MarketJsonResultOfMzPriceList | null): ApiMarketJsonResultOfMzPriceListDto {
  return (source ?? {}) as ApiMarketJsonResultOfMzPriceListDto;
}
