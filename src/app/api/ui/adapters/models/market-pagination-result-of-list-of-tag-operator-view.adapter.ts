import { ApiMarketPaginationResultOfListOfTagOperatorViewDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-tag-operator-view-dto';
import { MarketPaginationResultOfListOfTagOperatorView } from '../../models/market-pagination-result-of-list-of-tag-operator-view.interface';
import { tagOperatorViewAdapter } from './tag-operator-view.adapter';

export const marketPaginationResultOfListOfTagOperatorViewAdapter = (source?: ApiMarketPaginationResultOfListOfTagOperatorViewDto | null): MarketPaginationResultOfListOfTagOperatorView => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => tagOperatorViewAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
