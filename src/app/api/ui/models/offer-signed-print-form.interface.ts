import { OfferGeneratedPrintForm } from './offer-generated-print-form.interface';

export type OfferSignedPrintForm = OfferGeneratedPrintForm & { 'Signature'?: string | null; };
