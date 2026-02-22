import { MarketPaginationResultOfListOfEmployeeItem } from '../../models/market-pagination-result-of-list-of-employee-item.interface';
import { ApiMarketPaginationResultOfListOfEmployeeItemDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-employee-item-dto';
import { apiEmployeeItemDtoAdapter } from './api-employee-item-dto.adapter';

export const apiMarketPaginationResultOfListOfEmployeeItemDtoAdapter = (source?: MarketPaginationResultOfListOfEmployeeItem | null): ApiMarketPaginationResultOfListOfEmployeeItemDto => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => apiEmployeeItemDtoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
