import { MarketSearchRawModelAlt } from '../../models/market-search-raw-model-alt.interface';
import { ApiMarketSearchRawModelAltDto } from '../../../swagger/models/api-market-search-raw-model';
import { apiFieldDtoAdapter } from './api-field-dto.adapter';

export const apiMarketSearchRawModelAltDtoAdapter = (source?: MarketSearchRawModelAlt | null): ApiMarketSearchRawModelAltDto => {
  return {
    Filters: source?.filters?.map((item) => apiFieldDtoAdapter(item)),
  };
}
