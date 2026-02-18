import { ApiMarketJsonResultOfMarketPaginationResultOfListOfTagOperatorViewDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-tag-operator-view-dto';
import { MarketJsonResultOfMarketPaginationResultOfListOfTagOperatorView } from '../../models/market-json-result-of-market-pagination-result-of-list-of-tag-operator-view.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfListOfTagOperatorViewToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfListOfTagOperatorViewDto | null): MarketJsonResultOfMarketPaginationResultOfListOfTagOperatorView {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfListOfTagOperatorView;
}
