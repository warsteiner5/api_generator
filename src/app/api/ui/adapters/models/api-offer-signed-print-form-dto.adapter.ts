import { OfferSignedPrintForm } from '../../models/offer-signed-print-form.interface';
import { ApiOfferSignedPrintFormDto } from '../../../swagger/models/api-offer-signed-print-form-dto';
import { apiOfferGeneratedPrintFormDtoAdapter } from './api-offer-generated-print-form-dto.adapter';

export const apiOfferSignedPrintFormDtoAdapter = (source?: OfferSignedPrintForm | null): ApiOfferSignedPrintFormDto => {
  return {
    ...apiOfferGeneratedPrintFormDtoAdapter(source as unknown as Parameters<typeof apiOfferGeneratedPrintFormDtoAdapter>[0]),
    Signature: source?.signature,
  };
}
