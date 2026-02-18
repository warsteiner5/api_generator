import { ApiMarketPaginationResultOfListOfMarketOfferShortModelDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-market-offer-short-model-dto';
import { MarketPaginationResultOfListOfMarketOfferShortModel } from '../../models/market-pagination-result-of-list-of-market-offer-short-model.interface';
import { adaptMarketOfferShortModelToUI } from './market-offer-short-model.adapter';

export function adaptMarketPaginationResultOfListOfMarketOfferShortModelToUI(source?: ApiMarketPaginationResultOfListOfMarketOfferShortModelDto | null): MarketPaginationResultOfListOfMarketOfferShortModel {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptMarketOfferShortModelToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}
