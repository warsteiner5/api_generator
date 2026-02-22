import { OfferSignedPrintForm } from '../../models/offer-signed-print-form.interface';
import { ApiOfferSignedPrintFormDto } from '../../../swagger/models/api-offer-signed-print-form-dto';

export const apiOfferSignedPrintFormDtoAdapter = (source?: OfferSignedPrintForm | null): ApiOfferSignedPrintFormDto => {
  return (source ?? {}) as ApiOfferSignedPrintFormDto;
}
