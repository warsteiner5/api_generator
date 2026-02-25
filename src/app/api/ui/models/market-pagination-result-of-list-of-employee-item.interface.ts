import { EmployeeItem } from './employee-item.interface';
import { MarketPaginationResult } from './market-pagination-result.interface';

// @ts-ignore
export type MarketPaginationResultOfListOfEmployeeItem = MarketPaginationResult<EmployeeItem[]>;
