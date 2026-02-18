import { MarketPaginationResultOfListOfMarketOfferShortModel } from '../../models/market-pagination-result-of-list-of-market-offer-short-model.interface';
import { ApiMarketPaginationResultOfListOfMarketOfferShortModelDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-market-offer-short-model-dto';
import { adaptApiMarketOfferShortModelDto } from './api-market-offer-short-model-dto.adapter';

export function adaptApiMarketPaginationResultOfListOfMarketOfferShortModelDto(source?: MarketPaginationResultOfListOfMarketOfferShortModel | null): ApiMarketPaginationResultOfListOfMarketOfferShortModelDto {
  return {
    currentPage: source?.currentPage,
    items: (source?.items ?? []).map((item) => adaptApiMarketOfferShortModelDto(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
