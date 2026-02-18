import { MarketPaginationResultOfListOfTagOperatorView } from '../../models/market-pagination-result-of-list-of-tag-operator-view.interface';
import { ApiMarketPaginationResultOfListOfTagOperatorViewDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-tag-operator-view-dto';
import { adaptApiTagOperatorViewDto } from './api-tag-operator-view-dto.adapter';

export function adaptApiMarketPaginationResultOfListOfTagOperatorViewDto(source?: MarketPaginationResultOfListOfTagOperatorView | null): ApiMarketPaginationResultOfListOfTagOperatorViewDto {
  return {
    currentPage: source?.currentPage,
    items: (source?.items ?? []).map((item) => adaptApiTagOperatorViewDto(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
