import { ExternalLinkOfferToLotItem } from './external-link-offer-to-lot-item.interface';

// @ts-ignore
export interface ExternalLotItemsParticipantOffersInfo {
  lotItemId: number;
  lotItemName: string;
  lotItemOrderNumber: number;
  participantOfferCount: number;
  participantOffers: ExternalLinkOfferToLotItem[];
}
