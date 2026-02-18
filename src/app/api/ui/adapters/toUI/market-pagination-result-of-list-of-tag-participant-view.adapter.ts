import { ApiMarketPaginationResultOfListOfTagParticipantViewDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-tag-participant-view-dto';
import { MarketPaginationResultOfListOfTagParticipantView } from '../../models/market-pagination-result-of-list-of-tag-participant-view.interface';
import { adaptTagParticipantViewToUI } from './tag-participant-view.adapter';

export function adaptMarketPaginationResultOfListOfTagParticipantViewToUI(source?: ApiMarketPaginationResultOfListOfTagParticipantViewDto | null): MarketPaginationResultOfListOfTagParticipantView {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptTagParticipantViewToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}
