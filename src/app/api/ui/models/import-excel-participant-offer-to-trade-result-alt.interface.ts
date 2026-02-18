import { ImportExcelParticipantOffer } from './import-excel-participant-offer.interface';

export interface ImportExcelParticipantOfferToTradeResultAlt {
  errorText: string;
  errorsFileUrl: string;
  isSuccess: boolean;
  participantOffers: ImportExcelParticipantOffer[];
}
