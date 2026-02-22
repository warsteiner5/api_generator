import { ApiTradeRecommendationDto } from '../../../swagger/models/api-trade-recommendation-dto';
import { TradeRecommendation } from '../../models/trade-recommendation.interface';
import { participantOfferSourceEnumAdapter } from '../enums/participant-offer-source-enum.adapter';

export const tradeRecommendationAdapter = (source?: ApiTradeRecommendationDto | null): TradeRecommendation => {
  return {
    currencyCode: source?.CurrencyCode,
    customerExternalOrganizationId: source?.CustomerExternalOrganizationId,
    customerSource: source?.CustomerSource,
    deliveryKladrRegionName: source?.DeliveryKladrRegionName,
    id: source?.Id,
    name: source?.Name,
    participantExternalOrganizationId: source?.ParticipantExternalOrganizationId,
    participantOfferSource: source?.ParticipantOfferSource === null ? undefined : participantOfferSourceEnumAdapter(source?.ParticipantOfferSource),
    price: source?.Price,
  };
}
