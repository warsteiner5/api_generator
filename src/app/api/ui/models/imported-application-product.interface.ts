import { AvailableVatTypeEnum } from '../enums/available-vat-type.enum';

export interface ImportedApplicationProduct {
  countryConfirmation: string;
  lotItemId: number;
  manufacturerCountryCode: string;
  manufacturerCountryName: string;
  positionNumber: number;
  price: number;
  vatRate: AvailableVatTypeEnum;
}
