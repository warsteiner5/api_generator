import { MarketJsonResultOfParticipantOfferPublishResult } from '../../models/market-json-result-of-participant-offer-publish-result.interface';
import { ApiMarketJsonResultOfParticipantOfferPublishResultDto } from '../../../swagger/models/api-market-json-result-of-participant-offer-publish-result-dto';

export function adaptApiMarketJsonResultOfParticipantOfferPublishResultDto(source?: MarketJsonResultOfParticipantOfferPublishResult | null): ApiMarketJsonResultOfParticipantOfferPublishResultDto {
  return (source ?? {}) as ApiMarketJsonResultOfParticipantOfferPublishResultDto;
}
