import { LinkOfferToLotItem } from './link-offer-to-lot-item.interface';

// @ts-ignore
export interface LotItemsParticipantOffersInfo {
  lotItemId: number;
  lotItemName: string;
  lotItemOrderNumber: number;
  participantOfferCount: number;
  participantOffers: LinkOfferToLotItem[];
}
