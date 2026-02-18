import { MarketJsonResultOfMarketPaginationResultOfListOfTagParticipantView } from '../../models/market-json-result-of-market-pagination-result-of-list-of-tag-participant-view.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfTagParticipantViewDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-tag-participant-view-dto';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfListOfTagParticipantViewDto(source?: MarketJsonResultOfMarketPaginationResultOfListOfTagParticipantView | null): ApiMarketJsonResultOfMarketPaginationResultOfListOfTagParticipantViewDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfListOfTagParticipantViewDto;
}
