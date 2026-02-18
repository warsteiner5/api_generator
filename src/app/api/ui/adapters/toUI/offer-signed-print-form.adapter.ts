import { ApiOfferSignedPrintFormDto } from '../../../swagger/models/api-offer-signed-print-form-dto';
import { OfferSignedPrintForm } from '../../models/offer-signed-print-form.interface';

export function adaptOfferSignedPrintFormToUI(source?: ApiOfferSignedPrintFormDto | null): OfferSignedPrintForm {
  return (source ?? {}) as OfferSignedPrintForm;
}
