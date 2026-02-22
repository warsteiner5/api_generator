import { ApiOfferSignedPrintFormDto } from '../../../swagger/models/api-offer-signed-print-form-dto';
import { OfferSignedPrintForm } from '../../models/offer-signed-print-form.interface';

export const offerSignedPrintFormAdapter = (source?: ApiOfferSignedPrintFormDto | null): OfferSignedPrintForm => {
  return (source ?? {}) as OfferSignedPrintForm;
}
