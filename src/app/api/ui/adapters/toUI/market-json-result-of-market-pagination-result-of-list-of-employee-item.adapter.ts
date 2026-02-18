import { ApiMarketJsonResultOfMarketPaginationResultOfListOfEmployeeItemDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-employee-item-dto';
import { MarketJsonResultOfMarketPaginationResultOfListOfEmployeeItem } from '../../models/market-json-result-of-market-pagination-result-of-list-of-employee-item.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfListOfEmployeeItemToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfListOfEmployeeItemDto | null): MarketJsonResultOfMarketPaginationResultOfListOfEmployeeItem {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfListOfEmployeeItem;
}
