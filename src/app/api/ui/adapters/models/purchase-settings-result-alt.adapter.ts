import { ApiPurchaseSettingsResultAltDto } from '../../../swagger/models/api-purchase-settings-result';
import { PurchaseSettingsResultAlt } from '../../models/purchase-settings-result-alt.interface';
import { priceListItemAltAdapter } from './price-list-item-alt.adapter';
import { tagItemAltAdapter } from './tag-item-alt.adapter';

export const purchaseSettingsResultAltAdapter = (source?: ApiPurchaseSettingsResultAltDto | null): PurchaseSettingsResultAlt => {
  return {
    priceListSettings: source?.PriceListSettings?.map((item) => priceListItemAltAdapter(item)),
    tagSettings: source?.TagSettings?.map((item) => tagItemAltAdapter(item)),
  };
}
