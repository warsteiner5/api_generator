/* tslint:disable */
/* eslint-disable */
import { ApiOfferImportErrorEnum } from '../models/api-offer-import-error-enum';
export interface ApiParticipantOfferImportErrorStatisticDto {
  Count?: number;
  ErrorType?: ApiOfferImportErrorEnum;
  ErrorTypeDescription?: string | null;
}
