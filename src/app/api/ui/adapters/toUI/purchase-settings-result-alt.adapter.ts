import { ApiPurchaseSettingsResultAltDto } from '../../../swagger/models/api-purchase-settings-result';
import { PurchaseSettingsResultAlt } from '../../models/purchase-settings-result-alt.interface';
import { adaptPriceListItemAltToUI } from './price-list-item-alt.adapter';
import { adaptTagItemAltToUI } from './tag-item-alt.adapter';

export function adaptPurchaseSettingsResultAltToUI(source?: ApiPurchaseSettingsResultAltDto | null): PurchaseSettingsResultAlt {
  return {
    priceListSettings: (source?.PriceListSettings ?? []).map((item) => adaptPriceListItemAltToUI(item)),
    tagSettings: (source?.TagSettings ?? []).map((item) => adaptTagItemAltToUI(item)),
  };
}
