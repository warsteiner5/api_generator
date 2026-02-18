import { LinkAndPublishPublicOfferOrderModelAlt } from '../../models/link-and-publish-public-offer-order-model-alt.interface';
import { ApiLinkAndPublishPublicOfferOrderModelAltDto } from '../../../swagger/models/api-link-and-publish-public-offer-order-model';

export function adaptApiLinkAndPublishPublicOfferOrderModelAltDto(source?: LinkAndPublishPublicOfferOrderModelAlt | null): ApiLinkAndPublishPublicOfferOrderModelAltDto {
  return {
    IsCustomPrice: source?.isCustomPrice,
    IsNewTrade: source?.isNewTrade,
    ParticipantOfferIds: source?.participantOfferIds ?? [],
    PossibleSendByTransportCompany: source?.possibleSendByTransportCompany,
    TradeId: source?.tradeId,
  };
}
