import { MarketSearchRawModelAlt } from '../../models/market-search-raw-model-alt.interface';
import { ApiMarketSearchRawModelAltDto } from '../../../swagger/models/api-market-search-raw-model';
import { adaptApiFieldDto } from './api-field-dto.adapter';

export function adaptApiMarketSearchRawModelAltDto(source?: MarketSearchRawModelAlt | null): ApiMarketSearchRawModelAltDto {
  return {
    Filters: (source?.filters ?? []).map((item) => adaptApiFieldDto(item)),
  };
}
