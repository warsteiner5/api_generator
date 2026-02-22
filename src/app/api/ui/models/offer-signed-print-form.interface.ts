import { OfferGeneratedPrintForm } from './offer-generated-print-form.interface';

// @ts-ignore
export interface OfferSignedPrintForm extends OfferGeneratedPrintForm {
  signature: string;
}
