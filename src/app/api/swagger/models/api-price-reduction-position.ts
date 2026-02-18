/* tslint:disable */
/* eslint-disable */
import { ApiAvailableVatTypeEnum } from '../models/api-available-vat-type-enum';
export interface ApiPriceReductionPositionAltDto {
  OrderNumber?: number;
  Quantity?: number;
  UnitPrice?: number | null;
  VatRate?: ApiAvailableVatTypeEnum | null;
}
