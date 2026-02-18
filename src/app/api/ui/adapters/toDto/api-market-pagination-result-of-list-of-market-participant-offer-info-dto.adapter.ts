import { MarketPaginationResultOfListOfMarketParticipantOfferInfo } from '../../models/market-pagination-result-of-list-of-market-participant-offer-info.interface';
import { ApiMarketPaginationResultOfListOfMarketParticipantOfferInfoDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-market-participant-offer-info-dto';
import { adaptApiMarketParticipantOfferInfoDto } from './api-market-participant-offer-info-dto.adapter';

export function adaptApiMarketPaginationResultOfListOfMarketParticipantOfferInfoDto(source?: MarketPaginationResultOfListOfMarketParticipantOfferInfo | null): ApiMarketPaginationResultOfListOfMarketParticipantOfferInfoDto {
  return {
    currentPage: source?.currentPage,
    items: (source?.items ?? []).map((item) => adaptApiMarketParticipantOfferInfoDto(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
