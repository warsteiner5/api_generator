import { ApiMarketPaginationResultOfListOfRoleItemResponseDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-role-item-response-dto';
import { MarketPaginationResultOfListOfRoleItemResponse } from '../../models/market-pagination-result-of-list-of-role-item-response.interface';
import { roleItemResponseAdapter } from './role-item-response.adapter';

export const marketPaginationResultOfListOfRoleItemResponseAdapter = (source?: ApiMarketPaginationResultOfListOfRoleItemResponseDto | null): MarketPaginationResultOfListOfRoleItemResponse => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => roleItemResponseAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
