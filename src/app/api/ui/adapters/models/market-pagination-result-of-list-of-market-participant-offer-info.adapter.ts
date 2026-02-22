import { ApiMarketPaginationResultOfListOfMarketParticipantOfferInfoDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-market-participant-offer-info-dto';
import { MarketPaginationResultOfListOfMarketParticipantOfferInfo } from '../../models/market-pagination-result-of-list-of-market-participant-offer-info.interface';
import { marketParticipantOfferInfoAdapter } from './market-participant-offer-info.adapter';

export const marketPaginationResultOfListOfMarketParticipantOfferInfoAdapter = (source?: ApiMarketPaginationResultOfListOfMarketParticipantOfferInfoDto | null): MarketPaginationResultOfListOfMarketParticipantOfferInfo => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => marketParticipantOfferInfoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
