import { ApiSettingsStatsResultAltDto } from '../../../swagger/models/api-settings-stats-result';
import { SettingsStatsResultAlt } from '../../models/settings-stats-result-alt.interface';

export const settingsStatsResultAltAdapter = (source?: ApiSettingsStatsResultAltDto | null): SettingsStatsResultAlt => {
  return {
    priceListSettingsTagsCount: source?.PriceListSettingsTagsCount,
    purchaseSettingsPriceListsCount: source?.PurchaseSettingsPriceListsCount,
    purchaseSettingsTagsCount: source?.PurchaseSettingsTagsCount,
  };
}
