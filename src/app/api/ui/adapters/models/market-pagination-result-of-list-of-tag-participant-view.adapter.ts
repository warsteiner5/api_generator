import { ApiMarketPaginationResultOfListOfTagParticipantViewDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-tag-participant-view-dto';
import { MarketPaginationResultOfListOfTagParticipantView } from '../../models/market-pagination-result-of-list-of-tag-participant-view.interface';
import { tagParticipantViewAdapter } from './tag-participant-view.adapter';

export const marketPaginationResultOfListOfTagParticipantViewAdapter = (source?: ApiMarketPaginationResultOfListOfTagParticipantViewDto | null): MarketPaginationResultOfListOfTagParticipantView => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => tagParticipantViewAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
