import { OfferSignedPrintForm } from '../../models/offer-signed-print-form.interface';
import { ApiOfferSignedPrintFormDto } from '../../../swagger/models/api-offer-signed-print-form-dto';

export function adaptApiOfferSignedPrintFormDto(source?: OfferSignedPrintForm | null): ApiOfferSignedPrintFormDto {
  return (source ?? {}) as ApiOfferSignedPrintFormDto;
}
