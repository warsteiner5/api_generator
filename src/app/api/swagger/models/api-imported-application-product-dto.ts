/* tslint:disable */
/* eslint-disable */
import { ApiAvailableVatTypeEnum } from '../models/api-available-vat-type-enum';
export interface ApiImportedApplicationProductDto {
  CountryConfirmation?: string | null;
  LotItemId?: number;
  ManufacturerCountryCode?: string | null;
  ManufacturerCountryName?: string | null;
  PositionNumber?: number;
  Price?: number;
  VatRate?: ApiAvailableVatTypeEnum | null;
}
