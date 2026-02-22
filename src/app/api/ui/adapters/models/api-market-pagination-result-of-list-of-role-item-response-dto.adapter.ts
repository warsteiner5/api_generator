import { MarketPaginationResultOfListOfRoleItemResponse } from '../../models/market-pagination-result-of-list-of-role-item-response.interface';
import { ApiMarketPaginationResultOfListOfRoleItemResponseDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-role-item-response-dto';
import { apiRoleItemResponseDtoAdapter } from './api-role-item-response-dto.adapter';

export const apiMarketPaginationResultOfListOfRoleItemResponseDtoAdapter = (source?: MarketPaginationResultOfListOfRoleItemResponse | null): ApiMarketPaginationResultOfListOfRoleItemResponseDto => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => apiRoleItemResponseDtoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
