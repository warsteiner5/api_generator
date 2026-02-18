import { ApiSettingsStatsResultAltDto } from '../../../swagger/models/api-settings-stats-result';
import { SettingsStatsResultAlt } from '../../models/settings-stats-result-alt.interface';

export function adaptSettingsStatsResultAltToUI(source?: ApiSettingsStatsResultAltDto | null): SettingsStatsResultAlt {
  return {
    priceListSettingsTagsCount: source?.PriceListSettingsTagsCount ?? 0,
    purchaseSettingsPriceListsCount: source?.PurchaseSettingsPriceListsCount ?? 0,
    purchaseSettingsTagsCount: source?.PurchaseSettingsTagsCount ?? 0,
  };
}
