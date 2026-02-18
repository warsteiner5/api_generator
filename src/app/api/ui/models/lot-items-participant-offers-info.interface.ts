import { LinkOfferToLotItem } from './link-offer-to-lot-item.interface';

export interface LotItemsParticipantOffersInfo {
  lotItemId: number;
  lotItemName: string;
  lotItemOrderNumber: number;
  participantOfferCount: number;
  participantOffers: LinkOfferToLotItem[];
}
