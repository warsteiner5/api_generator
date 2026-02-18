/* tslint:disable */
/* eslint-disable */
import { ApiPriceListInfoAltDto } from '../models/api-price-list-info';
export interface ApiPriceListItemAltDto {
  DeviationPercent?: number | null;
  Id?: string | null;
  IsActive?: boolean;
  PriceListInfo?: ApiPriceListInfoAltDto | null;
  Regions?: Array<string> | null;
}
