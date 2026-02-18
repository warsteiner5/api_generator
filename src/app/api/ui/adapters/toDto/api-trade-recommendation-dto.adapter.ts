import { TradeRecommendation } from '../../models/trade-recommendation.interface';
import { ApiTradeRecommendationDto } from '../../../swagger/models/api-trade-recommendation-dto';
import { adaptApiParticipantOfferSourceEnum } from './api-participant-offer-source-enum.adapter';

export function adaptApiTradeRecommendationDto(source?: TradeRecommendation | null): ApiTradeRecommendationDto {
  return {
    CurrencyCode: source?.currencyCode,
    CustomerExternalOrganizationId: source?.customerExternalOrganizationId,
    CustomerSource: source?.customerSource,
    DeliveryKladrRegionName: source?.deliveryKladrRegionName,
    Id: source?.id,
    Name: source?.name,
    ParticipantExternalOrganizationId: source?.participantExternalOrganizationId,
    ParticipantOfferSource: adaptApiParticipantOfferSourceEnum(source?.participantOfferSource),
    Price: source?.price,
  };
}
