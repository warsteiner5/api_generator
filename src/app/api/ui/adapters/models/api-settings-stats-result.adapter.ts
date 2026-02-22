import { SettingsStatsResultAlt } from '../../models/settings-stats-result-alt.interface';
import { ApiSettingsStatsResultAltDto } from '../../../swagger/models/api-settings-stats-result';

export const apiSettingsStatsResultAltDtoAdapter = (source?: SettingsStatsResultAlt | null): ApiSettingsStatsResultAltDto => {
  return {
    PriceListSettingsTagsCount: source?.priceListSettingsTagsCount,
    PurchaseSettingsPriceListsCount: source?.purchaseSettingsPriceListsCount,
    PurchaseSettingsTagsCount: source?.purchaseSettingsTagsCount,
  };
}
