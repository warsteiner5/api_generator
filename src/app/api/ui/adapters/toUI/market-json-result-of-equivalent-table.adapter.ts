import { ApiMarketJsonResultOfEquivalentTableDto } from '../../../swagger/models/api-market-json-result-of-equivalent-table-dto';
import { MarketJsonResultOfEquivalentTable } from '../../models/market-json-result-of-equivalent-table.interface';

export function adaptMarketJsonResultOfEquivalentTableToUI(source?: ApiMarketJsonResultOfEquivalentTableDto | null): MarketJsonResultOfEquivalentTable {
  return (source ?? {}) as MarketJsonResultOfEquivalentTable;
}
