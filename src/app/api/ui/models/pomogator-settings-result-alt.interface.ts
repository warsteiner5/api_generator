import { PriceListSettingsResultAlt } from './price-list-settings-result-alt.interface';
import { PurchaseSettingsResultAlt } from './purchase-settings-result-alt.interface';

// @ts-ignore
export interface PomogatorSettingsResultAlt {
  priceListSettings: PriceListSettingsResultAlt;
  purchaseSettings: PurchaseSettingsResultAlt;
  settingsId: string;
}
