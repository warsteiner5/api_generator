import { MarketJsonResultOfMarketPaginationResultOfListOfTagOperatorView } from '../../models/market-json-result-of-market-pagination-result-of-list-of-tag-operator-view.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfTagOperatorViewDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-tag-operator-view-dto';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfListOfTagOperatorViewDto(source?: MarketJsonResultOfMarketPaginationResultOfListOfTagOperatorView | null): ApiMarketJsonResultOfMarketPaginationResultOfListOfTagOperatorViewDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfListOfTagOperatorViewDto;
}
