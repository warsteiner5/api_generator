import { ApiMarketJsonResultOfMarketSearchRawModel } from '../../../swagger/models/api-market-json-result-of-market-search-raw-model';
import { MarketJsonResultOfMarketSearchRawModel } from '../../models/market-json-result-of-market-search-raw-model.interface';

export function adaptMarketJsonResultOfMarketSearchRawModelToUI(source?: ApiMarketJsonResultOfMarketSearchRawModel | null): MarketJsonResultOfMarketSearchRawModel {
  return (source ?? {}) as MarketJsonResultOfMarketSearchRawModel;
}
