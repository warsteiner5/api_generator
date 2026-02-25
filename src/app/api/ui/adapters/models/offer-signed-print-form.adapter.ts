import { ApiOfferSignedPrintFormDto } from '../../../swagger/models/api-offer-signed-print-form-dto';
import { OfferSignedPrintForm } from '../../models/offer-signed-print-form.interface';
import { offerGeneratedPrintFormAdapter } from './offer-generated-print-form.adapter';

export const offerSignedPrintFormAdapter = (source?: ApiOfferSignedPrintFormDto | null): OfferSignedPrintForm => {
  return {
    ...offerGeneratedPrintFormAdapter(source as unknown as Parameters<typeof offerGeneratedPrintFormAdapter>[0]),
    signature: source?.Signature,
  };
}
