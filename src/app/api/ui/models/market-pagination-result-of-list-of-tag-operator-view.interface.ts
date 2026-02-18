import { TagOperatorView } from './tag-operator-view.interface';

export interface MarketPaginationResultOfListOfTagOperatorView {
  currentPage: number;
  items: TagOperatorView[];
  total: number;
  totalPages: number;
}
