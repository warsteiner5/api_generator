import { ApplicationDocument } from './application-document.interface';

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
