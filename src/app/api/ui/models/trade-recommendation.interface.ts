import { ParticipantOfferSourceEnum } from '../enums/participant-offer-source.enum';

export interface TradeRecommendation {
  currencyCode: string;
  customerExternalOrganizationId: string;
  customerSource: number;
  deliveryKladrRegionName: string;
  id: number;
  name: string;
  participantExternalOrganizationId: string;
  participantOfferSource: ParticipantOfferSourceEnum;
  price: number;
}
