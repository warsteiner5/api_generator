import { TagItemAlt } from './tag-item-alt.interface';

export interface MarketPaginationResultOfListOfTagItemAlt {
  currentPage: number;
  items: TagItemAlt[];
  total: number;
  totalPages: number;
}
