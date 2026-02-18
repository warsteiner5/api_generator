import { ApiOfferGeneratedPrintFormDto } from '../../../swagger/models/api-offer-generated-print-form-dto';
import { OfferGeneratedPrintForm } from '../../models/offer-generated-print-form.interface';

export function adaptOfferGeneratedPrintFormToUI(source?: ApiOfferGeneratedPrintFormDto | null): OfferGeneratedPrintForm {
  return {
    fileGuid: source?.FileGuid ?? '',
    id: source?.Id ?? 0,
  };
}
