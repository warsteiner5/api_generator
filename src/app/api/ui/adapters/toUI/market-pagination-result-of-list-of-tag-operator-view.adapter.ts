import { ApiMarketPaginationResultOfListOfTagOperatorViewDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-tag-operator-view-dto';
import { MarketPaginationResultOfListOfTagOperatorView } from '../../models/market-pagination-result-of-list-of-tag-operator-view.interface';
import { adaptTagOperatorViewToUI } from './tag-operator-view.adapter';

export function adaptMarketPaginationResultOfListOfTagOperatorViewToUI(source?: ApiMarketPaginationResultOfListOfTagOperatorViewDto | null): MarketPaginationResultOfListOfTagOperatorView {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptTagOperatorViewToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}
