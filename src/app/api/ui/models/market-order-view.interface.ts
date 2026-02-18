import { OrderView } from './order-view.interface';
import { ParticipantOfferDocument } from './participant-offer-document.interface';

export type MarketOrderView = OrderView & { 'DealId'?: number | null; 'PictureFileGuids'?: Array<string> | null; 'IsCustomPrice'?: boolean | null; 'MinOrderQuantity'?: number | null; 'InitialOrderPrice'?: number | null; 'ParticipantOfferDocuments'?: Array<ParticipantOfferDocument> | null; };
