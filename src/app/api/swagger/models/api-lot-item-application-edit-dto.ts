/* tslint:disable */
/* eslint-disable */
import { ApiLotItemApplicationCountryCodeDto } from '../models/api-lot-item-application-country-code-dto';
export interface ApiLotItemApplicationEditDto {
  Id?: number;
  LotItemOrder?: number;
  ManufacturerCountryCodes?: Array<ApiLotItemApplicationCountryCodeDto> | null;
}
