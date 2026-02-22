import { MarketPaginationResultOfListOfTradePlanLotMarket } from '../../models/market-pagination-result-of-list-of-trade-plan-lot-market.interface';
import { ApiMarketPaginationResultOfListOfTradePlanLotMarketDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-trade-plan-lot-market-dto';
import { apiTradePlanLotMarketDtoAdapter } from './api-trade-plan-lot-market-dto.adapter';

export const apiMarketPaginationResultOfListOfTradePlanLotMarketDtoAdapter = (source?: MarketPaginationResultOfListOfTradePlanLotMarket | null): ApiMarketPaginationResultOfListOfTradePlanLotMarketDto => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => apiTradePlanLotMarketDtoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
