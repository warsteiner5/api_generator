import { ApiMarketJsonResultOfMarketPaginationResultOfListOfTagParticipantViewDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-tag-participant-view-dto';
import { MarketJsonResultOfMarketPaginationResultOfListOfTagParticipantView } from '../../models/market-json-result-of-market-pagination-result-of-list-of-tag-participant-view.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfListOfTagParticipantViewToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfListOfTagParticipantViewDto | null): MarketJsonResultOfMarketPaginationResultOfListOfTagParticipantView {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfListOfTagParticipantView;
}
