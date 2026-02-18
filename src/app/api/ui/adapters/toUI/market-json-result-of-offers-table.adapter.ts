import { ApiMarketJsonResultOfOffersTableDto } from '../../../swagger/models/api-market-json-result-of-offers-table-dto';
import { MarketJsonResultOfOffersTable } from '../../models/market-json-result-of-offers-table.interface';

export function adaptMarketJsonResultOfOffersTableToUI(source?: ApiMarketJsonResultOfOffersTableDto | null): MarketJsonResultOfOffersTable {
  return (source ?? {}) as MarketJsonResultOfOffersTable;
}
