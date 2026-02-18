import { ApiMarketPaginationResultOfListOfRoleItemResponseDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-role-item-response-dto';
import { MarketPaginationResultOfListOfRoleItemResponse } from '../../models/market-pagination-result-of-list-of-role-item-response.interface';
import { adaptRoleItemResponseToUI } from './role-item-response.adapter';

export function adaptMarketPaginationResultOfListOfRoleItemResponseToUI(source?: ApiMarketPaginationResultOfListOfRoleItemResponseDto | null): MarketPaginationResultOfListOfRoleItemResponse {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptRoleItemResponseToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}
