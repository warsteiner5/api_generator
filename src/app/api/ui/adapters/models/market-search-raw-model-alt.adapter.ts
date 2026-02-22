import { ApiMarketSearchRawModelAltDto } from '../../../swagger/models/api-market-search-raw-model';
import { MarketSearchRawModelAlt } from '../../models/market-search-raw-model-alt.interface';
import { fieldAdapter } from './field.adapter';

export const marketSearchRawModelAltAdapter = (source?: ApiMarketSearchRawModelAltDto | null): MarketSearchRawModelAlt => {
  return {
    filters: source?.Filters?.map((item) => fieldAdapter(item)),
  };
}
