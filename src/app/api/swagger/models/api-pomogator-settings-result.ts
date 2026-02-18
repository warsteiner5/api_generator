/* tslint:disable */
/* eslint-disable */
import { ApiPriceListSettingsResultAltDto } from '../models/api-price-list-settings-result';
import { ApiPurchaseSettingsResultAltDto } from '../models/api-purchase-settings-result';
export interface ApiPomogatorSettingsResultAltDto {
  PriceListSettings?: ApiPriceListSettingsResultAltDto | null;
  PurchaseSettings?: ApiPurchaseSettingsResultAltDto | null;
  SettingsId?: string | null;
}
