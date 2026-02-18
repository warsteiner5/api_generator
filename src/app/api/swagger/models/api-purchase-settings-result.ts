/* tslint:disable */
/* eslint-disable */
import { ApiPriceListItemAltDto } from '../models/api-price-list-item';
import { ApiTagItemAltDto } from '../models/api-tag-item';
export interface ApiPurchaseSettingsResultAltDto {
  PriceListSettings?: Array<ApiPriceListItemAltDto> | null;
  TagSettings?: Array<ApiTagItemAltDto> | null;
}
