import { MarketPaginationResultOfListOfAcceptedPriceListInfo } from './market-pagination-result-of-list-of-accepted-price-list-info.interface';

export type AcceptedPriceListsExtendedResultAlt = MarketPaginationResultOfListOfAcceptedPriceListInfo & { 'MinPrice'?: number | null; 'AveragePrice'?: number | null; };
