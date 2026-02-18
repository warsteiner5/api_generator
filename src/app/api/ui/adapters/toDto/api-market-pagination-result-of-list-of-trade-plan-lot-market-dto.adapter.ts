import { MarketPaginationResultOfListOfTradePlanLotMarket } from '../../models/market-pagination-result-of-list-of-trade-plan-lot-market.interface';
import { ApiMarketPaginationResultOfListOfTradePlanLotMarketDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-trade-plan-lot-market-dto';
import { adaptApiTradePlanLotMarketDto } from './api-trade-plan-lot-market-dto.adapter';

export function adaptApiMarketPaginationResultOfListOfTradePlanLotMarketDto(source?: MarketPaginationResultOfListOfTradePlanLotMarket | null): ApiMarketPaginationResultOfListOfTradePlanLotMarketDto {
  return {
    currentPage: source?.currentPage,
    items: (source?.items ?? []).map((item) => adaptApiTradePlanLotMarketDto(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
