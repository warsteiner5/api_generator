import { MarketJsonResultOfMarketPaginationResultOfListOfRoleItemResponse } from '../../models/market-json-result-of-market-pagination-result-of-list-of-role-item-response.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfRoleItemResponseDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-role-item-response-dto';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfListOfRoleItemResponseDto(source?: MarketJsonResultOfMarketPaginationResultOfListOfRoleItemResponse | null): ApiMarketJsonResultOfMarketPaginationResultOfListOfRoleItemResponseDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfListOfRoleItemResponseDto;
}
