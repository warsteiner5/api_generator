import { ApiPomogatorSettingsResultAltDto } from '../../../swagger/models/api-pomogator-settings-result';
import { PomogatorSettingsResultAlt } from '../../models/pomogator-settings-result-alt.interface';
import { adaptPriceListSettingsResultAltToUI } from './price-list-settings-result-alt.adapter';
import { adaptPurchaseSettingsResultAltToUI } from './purchase-settings-result-alt.adapter';

export function adaptPomogatorSettingsResultAltToUI(source?: ApiPomogatorSettingsResultAltDto | null): PomogatorSettingsResultAlt {
  return {
    priceListSettings: adaptPriceListSettingsResultAltToUI(source?.PriceListSettings),
    purchaseSettings: adaptPurchaseSettingsResultAltToUI(source?.PurchaseSettings),
    settingsId: source?.SettingsId ?? '',
  };
}
