import { OfferImportErrorEnum } from '../enums/offer-import-error.enum';

export interface ParticipantOfferImportErrorStatistic {
  count: number;
  errorType: OfferImportErrorEnum;
  errorTypeDescription: string;
}
