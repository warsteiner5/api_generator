import { ApiLinkAndPublishPublicOfferOrderModelAltDto } from '../../../swagger/models/api-link-and-publish-public-offer-order-model';
import { LinkAndPublishPublicOfferOrderModelAlt } from '../../models/link-and-publish-public-offer-order-model-alt.interface';

export const linkAndPublishPublicOfferOrderModelAltAdapter = (source?: ApiLinkAndPublishPublicOfferOrderModelAltDto | null): LinkAndPublishPublicOfferOrderModelAlt => {
  return {
    isCustomPrice: source?.IsCustomPrice,
    isNewTrade: source?.IsNewTrade,
    participantOfferIds: source?.ParticipantOfferIds,
    possibleSendByTransportCompany: source?.PossibleSendByTransportCompany,
    tradeId: source?.TradeId,
  };
}
