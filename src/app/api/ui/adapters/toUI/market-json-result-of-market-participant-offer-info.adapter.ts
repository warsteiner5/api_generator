import { ApiMarketJsonResultOfMarketParticipantOfferInfoDto } from '../../../swagger/models/api-market-json-result-of-market-participant-offer-info-dto';
import { MarketJsonResultOfMarketParticipantOfferInfo } from '../../models/market-json-result-of-market-participant-offer-info.interface';

export function adaptMarketJsonResultOfMarketParticipantOfferInfoToUI(source?: ApiMarketJsonResultOfMarketParticipantOfferInfoDto | null): MarketJsonResultOfMarketParticipantOfferInfo {
  return (source ?? {}) as MarketJsonResultOfMarketParticipantOfferInfo;
}
