import { OrderView } from './order-view.interface';
import { ParticipantOfferDocument } from './participant-offer-document.interface';

// @ts-ignore
export interface MarketOrderView extends OrderView {
  dealId: number;
  pictureFileGuids: string[];
  isCustomPrice: boolean;
  minOrderQuantity: number;
  initialOrderPrice: number;
  participantOfferDocuments: ParticipantOfferDocument[];
}
