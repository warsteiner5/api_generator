import { MarketPaginationResultOfListOfTagParticipantView } from '../../models/market-pagination-result-of-list-of-tag-participant-view.interface';
import { ApiMarketPaginationResultOfListOfTagParticipantViewDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-tag-participant-view-dto';
import { adaptApiTagParticipantViewDto } from './api-tag-participant-view-dto.adapter';

export function adaptApiMarketPaginationResultOfListOfTagParticipantViewDto(source?: MarketPaginationResultOfListOfTagParticipantView | null): ApiMarketPaginationResultOfListOfTagParticipantViewDto {
  return {
    currentPage: source?.currentPage,
    items: (source?.items ?? []).map((item) => adaptApiTagParticipantViewDto(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
