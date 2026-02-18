import { ApiMarketJsonResultOfMarketPaginationResultOfListOfRoleItemResponseDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-role-item-response-dto';
import { MarketJsonResultOfMarketPaginationResultOfListOfRoleItemResponse } from '../../models/market-json-result-of-market-pagination-result-of-list-of-role-item-response.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfListOfRoleItemResponseToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfListOfRoleItemResponseDto | null): MarketJsonResultOfMarketPaginationResultOfListOfRoleItemResponse {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfListOfRoleItemResponse;
}
