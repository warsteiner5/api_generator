import { PurchaseSettingsResultAlt } from '../../models/purchase-settings-result-alt.interface';
import { ApiPurchaseSettingsResultAltDto } from '../../../swagger/models/api-purchase-settings-result';
import { apiPriceListItemAltDtoAdapter } from './api-price-list-item.adapter';
import { apiTagItemAltDtoAdapter } from './api-tag-item.adapter';

export const apiPurchaseSettingsResultAltDtoAdapter = (source?: PurchaseSettingsResultAlt | null): ApiPurchaseSettingsResultAltDto => {
  return {
    PriceListSettings: source?.priceListSettings?.map((item) => apiPriceListItemAltDtoAdapter(item)),
    TagSettings: source?.tagSettings?.map((item) => apiTagItemAltDtoAdapter(item)),
  };
}
