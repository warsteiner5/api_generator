import { ApiLinkAndPublishPublicOfferOrderModelAltDto } from '../../../swagger/models/api-link-and-publish-public-offer-order-model';
import { LinkAndPublishPublicOfferOrderModelAlt } from '../../models/link-and-publish-public-offer-order-model-alt.interface';

export function adaptLinkAndPublishPublicOfferOrderModelAltToUI(source?: ApiLinkAndPublishPublicOfferOrderModelAltDto | null): LinkAndPublishPublicOfferOrderModelAlt {
  return {
    isCustomPrice: source?.IsCustomPrice ?? false,
    isNewTrade: source?.IsNewTrade ?? false,
    participantOfferIds: source?.ParticipantOfferIds ?? [],
    possibleSendByTransportCompany: source?.PossibleSendByTransportCompany ?? false,
    tradeId: source?.TradeId ?? 0,
  };
}
