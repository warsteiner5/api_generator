import { MarketPaginationResultOfListOfMarketOfferShortModel } from '../../models/market-pagination-result-of-list-of-market-offer-short-model.interface';
import { ApiMarketPaginationResultOfListOfMarketOfferShortModelDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-market-offer-short-model-dto';
import { apiMarketOfferShortModelDtoAdapter } from './api-market-offer-short-model-dto.adapter';

export const apiMarketPaginationResultOfListOfMarketOfferShortModelDtoAdapter = (source?: MarketPaginationResultOfListOfMarketOfferShortModel | null): ApiMarketPaginationResultOfListOfMarketOfferShortModelDto => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => apiMarketOfferShortModelDtoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
