import { ImportExcelParticipantOffer } from './import-excel-participant-offer.interface';

// @ts-ignore
export interface ImportExcelParticipantOfferToTradeResultAlt {
  errorText: string;
  errorsFileUrl: string;
  isSuccess: boolean;
  participantOffers: ImportExcelParticipantOffer[];
}
