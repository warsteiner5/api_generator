import { ApiMarketPaginationResultOfListOfEmployeeItemDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-employee-item-dto';
import { MarketPaginationResultOfListOfEmployeeItem } from '../../models/market-pagination-result-of-list-of-employee-item.interface';
import { employeeItemAdapter } from './employee-item.adapter';

export const marketPaginationResultOfListOfEmployeeItemAdapter = (source?: ApiMarketPaginationResultOfListOfEmployeeItemDto | null): MarketPaginationResultOfListOfEmployeeItem => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => employeeItemAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
