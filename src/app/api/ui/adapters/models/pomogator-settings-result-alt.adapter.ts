import { ApiPomogatorSettingsResultAltDto } from '../../../swagger/models/api-pomogator-settings-result';
import { PomogatorSettingsResultAlt } from '../../models/pomogator-settings-result-alt.interface';
import { priceListSettingsResultAltAdapter } from './price-list-settings-result-alt.adapter';
import { purchaseSettingsResultAltAdapter } from './purchase-settings-result-alt.adapter';

export const pomogatorSettingsResultAltAdapter = (source?: ApiPomogatorSettingsResultAltDto | null): PomogatorSettingsResultAlt => {
  return {
    priceListSettings: source?.PriceListSettings === null ? undefined : priceListSettingsResultAltAdapter(source?.PriceListSettings),
    purchaseSettings: source?.PurchaseSettings === null ? undefined : purchaseSettingsResultAltAdapter(source?.PurchaseSettings),
    settingsId: source?.SettingsId,
  };
}
