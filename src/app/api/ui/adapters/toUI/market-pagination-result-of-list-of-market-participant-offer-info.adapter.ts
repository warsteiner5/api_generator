import { ApiMarketPaginationResultOfListOfMarketParticipantOfferInfoDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-market-participant-offer-info-dto';
import { MarketPaginationResultOfListOfMarketParticipantOfferInfo } from '../../models/market-pagination-result-of-list-of-market-participant-offer-info.interface';
import { adaptMarketParticipantOfferInfoToUI } from './market-participant-offer-info.adapter';

export function adaptMarketPaginationResultOfListOfMarketParticipantOfferInfoToUI(source?: ApiMarketPaginationResultOfListOfMarketParticipantOfferInfoDto | null): MarketPaginationResultOfListOfMarketParticipantOfferInfo {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptMarketParticipantOfferInfoToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}
