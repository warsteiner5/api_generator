import { PomogatorSettingsResultAlt } from '../../models/pomogator-settings-result-alt.interface';
import { ApiPomogatorSettingsResultAltDto } from '../../../swagger/models/api-pomogator-settings-result';
import { apiPriceListSettingsResultAltDtoAdapter } from './api-price-list-settings-result.adapter';
import { apiPurchaseSettingsResultAltDtoAdapter } from './api-purchase-settings-result.adapter';

export const apiPomogatorSettingsResultAltDtoAdapter = (source?: PomogatorSettingsResultAlt | null): ApiPomogatorSettingsResultAltDto => {
  return {
    PriceListSettings: source?.priceListSettings === null ? undefined : apiPriceListSettingsResultAltDtoAdapter(source?.priceListSettings),
    PurchaseSettings: source?.purchaseSettings === null ? undefined : apiPurchaseSettingsResultAltDtoAdapter(source?.purchaseSettings),
    SettingsId: source?.settingsId,
  };
}
