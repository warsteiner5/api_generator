import { ParticipantOfferSourceEnum } from '../enums/participant-offer-source.enum';

// @ts-ignore
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
