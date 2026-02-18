import { ApiMarketJsonResultOfParticipantOfferPublishResultDto } from '../../../swagger/models/api-market-json-result-of-participant-offer-publish-result-dto';
import { MarketJsonResultOfParticipantOfferPublishResult } from '../../models/market-json-result-of-participant-offer-publish-result.interface';

export function adaptMarketJsonResultOfParticipantOfferPublishResultToUI(source?: ApiMarketJsonResultOfParticipantOfferPublishResultDto | null): MarketJsonResultOfParticipantOfferPublishResult {
  return (source ?? {}) as MarketJsonResultOfParticipantOfferPublishResult;
}
