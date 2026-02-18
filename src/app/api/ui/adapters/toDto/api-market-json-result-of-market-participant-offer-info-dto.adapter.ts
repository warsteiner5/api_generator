import { MarketJsonResultOfMarketParticipantOfferInfo } from '../../models/market-json-result-of-market-participant-offer-info.interface';
import { ApiMarketJsonResultOfMarketParticipantOfferInfoDto } from '../../../swagger/models/api-market-json-result-of-market-participant-offer-info-dto';

export function adaptApiMarketJsonResultOfMarketParticipantOfferInfoDto(source?: MarketJsonResultOfMarketParticipantOfferInfo | null): ApiMarketJsonResultOfMarketParticipantOfferInfoDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketParticipantOfferInfoDto;
}
