import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketOfferShortModelDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-market-offer-short-model-dto';
import { MarketJsonResultOfMarketPaginationResultOfListOfMarketOfferShortModel } from '../../models/market-json-result-of-market-pagination-result-of-list-of-market-offer-short-model.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfListOfMarketOfferShortModelToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketOfferShortModelDto | null): MarketJsonResultOfMarketPaginationResultOfListOfMarketOfferShortModel {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfListOfMarketOfferShortModel;
}
