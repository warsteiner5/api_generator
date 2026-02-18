import { ApiMarketPaginationResultOfListOfEmployeeItemDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-employee-item-dto';
import { MarketPaginationResultOfListOfEmployeeItem } from '../../models/market-pagination-result-of-list-of-employee-item.interface';
import { adaptEmployeeItemToUI } from './employee-item.adapter';

export function adaptMarketPaginationResultOfListOfEmployeeItemToUI(source?: ApiMarketPaginationResultOfListOfEmployeeItemDto | null): MarketPaginationResultOfListOfEmployeeItem {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptEmployeeItemToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}
