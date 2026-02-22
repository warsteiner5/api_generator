import { OfferImportErrorEnum } from '../enums/offer-import-error.enum';

// @ts-ignore
export interface ParticipantOfferImportErrorStatistic {
  count: number;
  errorType: OfferImportErrorEnum;
  errorTypeDescription: string;
}
