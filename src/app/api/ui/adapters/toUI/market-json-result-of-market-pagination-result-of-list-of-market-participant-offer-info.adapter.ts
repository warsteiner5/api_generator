import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketParticipantOfferInfoDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-market-participant-offer-info-dto';
import { MarketJsonResultOfMarketPaginationResultOfListOfMarketParticipantOfferInfo } from '../../models/market-json-result-of-market-pagination-result-of-list-of-market-participant-offer-info.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfListOfMarketParticipantOfferInfoToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketParticipantOfferInfoDto | null): MarketJsonResultOfMarketPaginationResultOfListOfMarketParticipantOfferInfo {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfListOfMarketParticipantOfferInfo;
}
