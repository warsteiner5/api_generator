import { MarketPaginationResultOfListOfEmployeeItem } from '../../models/market-pagination-result-of-list-of-employee-item.interface';
import { ApiMarketPaginationResultOfListOfEmployeeItemDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-employee-item-dto';
import { adaptApiEmployeeItemDto } from './api-employee-item-dto.adapter';

export function adaptApiMarketPaginationResultOfListOfEmployeeItemDto(source?: MarketPaginationResultOfListOfEmployeeItem | null): ApiMarketPaginationResultOfListOfEmployeeItemDto {
  return {
    currentPage: source?.currentPage,
    items: (source?.items ?? []).map((item) => adaptApiEmployeeItemDto(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
