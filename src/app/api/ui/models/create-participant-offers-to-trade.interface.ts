import { ParticipantOfferToTradeLotItem } from './participant-offer-to-trade-lot-item.interface';
import { PrivateDocument } from './private-document.interface';

// @ts-ignore
export interface CreateParticipantOffersToTrade {
  items: ParticipantOfferToTradeLotItem[];
  privateDocuments: PrivateDocument[];
}
