import { ModerationPriceListSearchItem } from './moderation-price-list-search-item.interface';

export interface MarketPaginationResultOfListOfModerationPriceListSearchItem {
  currentPage: number;
  items: ModerationPriceListSearchItem[];
  total: number;
  totalPages: number;
}
