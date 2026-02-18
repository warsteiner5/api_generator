import { ApiMarketSearchRawModelAltDto } from '../../../swagger/models/api-market-search-raw-model';
import { MarketSearchRawModelAlt } from '../../models/market-search-raw-model-alt.interface';
import { adaptFieldToUI } from './field.adapter';

export function adaptMarketSearchRawModelAltToUI(source?: ApiMarketSearchRawModelAltDto | null): MarketSearchRawModelAlt {
  return {
    filters: (source?.Filters ?? []).map((item) => adaptFieldToUI(item)),
  };
}
