import { MarketPaginationResultOfListOfAcceptedPriceListInfo } from './market-pagination-result-of-list-of-accepted-price-list-info.interface';

// @ts-ignore
export interface AcceptedPriceListsExtendedResultAlt extends MarketPaginationResultOfListOfAcceptedPriceListInfo {
  minPrice: number;
  averagePrice: number;
}
