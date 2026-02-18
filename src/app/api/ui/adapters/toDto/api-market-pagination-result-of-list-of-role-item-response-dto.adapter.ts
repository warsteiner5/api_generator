import { MarketPaginationResultOfListOfRoleItemResponse } from '../../models/market-pagination-result-of-list-of-role-item-response.interface';
import { ApiMarketPaginationResultOfListOfRoleItemResponseDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-role-item-response-dto';
import { adaptApiRoleItemResponseDto } from './api-role-item-response-dto.adapter';

export function adaptApiMarketPaginationResultOfListOfRoleItemResponseDto(source?: MarketPaginationResultOfListOfRoleItemResponse | null): ApiMarketPaginationResultOfListOfRoleItemResponseDto {
  return {
    currentPage: source?.currentPage,
    items: (source?.items ?? []).map((item) => adaptApiRoleItemResponseDto(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
