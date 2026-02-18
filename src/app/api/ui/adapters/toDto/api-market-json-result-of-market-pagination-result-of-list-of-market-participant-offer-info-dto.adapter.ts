import { MarketJsonResultOfMarketPaginationResultOfListOfMarketParticipantOfferInfo } from '../../models/market-json-result-of-market-pagination-result-of-list-of-market-participant-offer-info.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketParticipantOfferInfoDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-market-participant-offer-info-dto';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfListOfMarketParticipantOfferInfoDto(source?: MarketJsonResultOfMarketPaginationResultOfListOfMarketParticipantOfferInfo | null): ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketParticipantOfferInfoDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketParticipantOfferInfoDto;
}
