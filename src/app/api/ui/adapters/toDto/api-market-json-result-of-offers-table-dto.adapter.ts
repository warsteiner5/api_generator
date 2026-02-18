import { MarketJsonResultOfOffersTable } from '../../models/market-json-result-of-offers-table.interface';
import { ApiMarketJsonResultOfOffersTableDto } from '../../../swagger/models/api-market-json-result-of-offers-table-dto';

export function adaptApiMarketJsonResultOfOffersTableDto(source?: MarketJsonResultOfOffersTable | null): ApiMarketJsonResultOfOffersTableDto {
  return (source ?? {}) as ApiMarketJsonResultOfOffersTableDto;
}
