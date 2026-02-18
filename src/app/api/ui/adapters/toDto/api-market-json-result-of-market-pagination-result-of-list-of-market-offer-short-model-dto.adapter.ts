import { MarketJsonResultOfMarketPaginationResultOfListOfMarketOfferShortModel } from '../../models/market-json-result-of-market-pagination-result-of-list-of-market-offer-short-model.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketOfferShortModelDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-market-offer-short-model-dto';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfListOfMarketOfferShortModelDto(source?: MarketJsonResultOfMarketPaginationResultOfListOfMarketOfferShortModel | null): ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketOfferShortModelDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketOfferShortModelDto;
}
