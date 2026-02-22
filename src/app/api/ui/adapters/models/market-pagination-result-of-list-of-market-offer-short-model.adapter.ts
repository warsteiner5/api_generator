import { ApiMarketPaginationResultOfListOfMarketOfferShortModelDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-market-offer-short-model-dto';
import { MarketPaginationResultOfListOfMarketOfferShortModel } from '../../models/market-pagination-result-of-list-of-market-offer-short-model.interface';
import { marketOfferShortModelAdapter } from './market-offer-short-model.adapter';

export const marketPaginationResultOfListOfMarketOfferShortModelAdapter = (source?: ApiMarketPaginationResultOfListOfMarketOfferShortModelDto | null): MarketPaginationResultOfListOfMarketOfferShortModel => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => marketOfferShortModelAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
