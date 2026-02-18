import { MarketJsonResultOfMarketSearchRawModel } from '../../models/market-json-result-of-market-search-raw-model.interface';
import { ApiMarketJsonResultOfMarketSearchRawModel } from '../../../swagger/models/api-market-json-result-of-market-search-raw-model';

export function adaptApiMarketJsonResultOfMarketSearchRawModel(source?: MarketJsonResultOfMarketSearchRawModel | null): ApiMarketJsonResultOfMarketSearchRawModel {
  return (source ?? {}) as ApiMarketJsonResultOfMarketSearchRawModel;
}
