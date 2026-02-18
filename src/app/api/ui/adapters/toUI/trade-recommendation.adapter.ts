import { ApiTradeRecommendationDto } from '../../../swagger/models/api-trade-recommendation-dto';
import { TradeRecommendation } from '../../models/trade-recommendation.interface';
import { adaptParticipantOfferSourceEnumToUI } from './participant-offer-source-enum.adapter';

export function adaptTradeRecommendationToUI(source?: ApiTradeRecommendationDto | null): TradeRecommendation {
  return {
    currencyCode: source?.CurrencyCode ?? '',
    customerExternalOrganizationId: source?.CustomerExternalOrganizationId ?? '',
    customerSource: source?.CustomerSource ?? 0,
    deliveryKladrRegionName: source?.DeliveryKladrRegionName ?? '',
    id: source?.Id ?? 0,
    name: source?.Name ?? '',
    participantExternalOrganizationId: source?.ParticipantExternalOrganizationId ?? '',
    participantOfferSource: adaptParticipantOfferSourceEnumToUI(source?.ParticipantOfferSource),
    price: source?.Price ?? 0,
  };
}
