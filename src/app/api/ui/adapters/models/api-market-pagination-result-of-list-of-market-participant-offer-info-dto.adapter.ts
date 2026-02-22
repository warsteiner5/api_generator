import { MarketPaginationResultOfListOfMarketParticipantOfferInfo } from '../../models/market-pagination-result-of-list-of-market-participant-offer-info.interface';
import { ApiMarketPaginationResultOfListOfMarketParticipantOfferInfoDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-market-participant-offer-info-dto';
import { apiMarketParticipantOfferInfoDtoAdapter } from './api-market-participant-offer-info-dto.adapter';

export const apiMarketPaginationResultOfListOfMarketParticipantOfferInfoDtoAdapter = (source?: MarketPaginationResultOfListOfMarketParticipantOfferInfo | null): ApiMarketPaginationResultOfListOfMarketParticipantOfferInfoDto => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => apiMarketParticipantOfferInfoDtoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
