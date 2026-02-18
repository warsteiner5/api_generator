import { MarketJsonResultOfMarketPaginationResultOfListOfEmployeeItem } from '../../models/market-json-result-of-market-pagination-result-of-list-of-employee-item.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfEmployeeItemDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-employee-item-dto';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfListOfEmployeeItemDto(source?: MarketJsonResultOfMarketPaginationResultOfListOfEmployeeItem | null): ApiMarketJsonResultOfMarketPaginationResultOfListOfEmployeeItemDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfListOfEmployeeItemDto;
}
