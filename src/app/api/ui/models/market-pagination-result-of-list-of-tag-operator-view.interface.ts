import { TagOperatorView } from './tag-operator-view.interface';

// @ts-ignore
export interface MarketPaginationResultOfListOfTagOperatorView {
  currentPage: number;
  items: TagOperatorView[];
  total: number;
  totalPages: number;
}
