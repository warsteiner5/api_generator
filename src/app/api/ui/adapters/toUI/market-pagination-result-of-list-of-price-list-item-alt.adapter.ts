import { ApiMarketPaginationResultOfListOfPriceListItemAltDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-price-list-item';
import { MarketPaginationResultOfListOfPriceListItemAlt } from '../../models/market-pagination-result-of-list-of-price-list-item-alt.interface';
import { adaptPriceListItemAltToUI } from './price-list-item-alt.adapter';

export function adaptMarketPaginationResultOfListOfPriceListItemAltToUI(source?: ApiMarketPaginationResultOfListOfPriceListItemAltDto | null): MarketPaginationResultOfListOfPriceListItemAlt {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptPriceListItemAltToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}
