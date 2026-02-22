import { ApplicationDocument } from './application-document.interface';

// @ts-ignore
export interface ApplicationItem {
  countryConfirmation: string;
  documents: ApplicationDocument[];
  lotItemApplicationId: number;
  lotItemId: number;
  lotItemOrder: number;
  manufacturerCountryCode: string;
  participantOfferId: number;
  price: number;
  sumVat: number;
  taxPercent: number;
}
