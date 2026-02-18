import { MarketJsonResultOfEquivalentTable } from '../../models/market-json-result-of-equivalent-table.interface';
import { ApiMarketJsonResultOfEquivalentTableDto } from '../../../swagger/models/api-market-json-result-of-equivalent-table-dto';

export function adaptApiMarketJsonResultOfEquivalentTableDto(source?: MarketJsonResultOfEquivalentTable | null): ApiMarketJsonResultOfEquivalentTableDto {
  return (source ?? {}) as ApiMarketJsonResultOfEquivalentTableDto;
}
