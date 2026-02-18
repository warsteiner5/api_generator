import { PurchaseSettingsResultAlt } from '../../models/purchase-settings-result-alt.interface';
import { ApiPurchaseSettingsResultAltDto } from '../../../swagger/models/api-purchase-settings-result';
import { adaptApiPriceListItemAltDto } from './api-price-list-item.adapter';
import { adaptApiTagItemAltDto } from './api-tag-item.adapter';

export function adaptApiPurchaseSettingsResultAltDto(source?: PurchaseSettingsResultAlt | null): ApiPurchaseSettingsResultAltDto {
  return {
    PriceListSettings: (source?.priceListSettings ?? []).map((item) => adaptApiPriceListItemAltDto(item)),
    TagSettings: (source?.tagSettings ?? []).map((item) => adaptApiTagItemAltDto(item)),
  };
}
