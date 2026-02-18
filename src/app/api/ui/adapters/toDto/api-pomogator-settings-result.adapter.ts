import { PomogatorSettingsResultAlt } from '../../models/pomogator-settings-result-alt.interface';
import { ApiPomogatorSettingsResultAltDto } from '../../../swagger/models/api-pomogator-settings-result';
import { adaptApiPriceListSettingsResultAltDto } from './api-price-list-settings-result.adapter';
import { adaptApiPurchaseSettingsResultAltDto } from './api-purchase-settings-result.adapter';

export function adaptApiPomogatorSettingsResultAltDto(source?: PomogatorSettingsResultAlt | null): ApiPomogatorSettingsResultAltDto {
  return {
    PriceListSettings: adaptApiPriceListSettingsResultAltDto(source?.priceListSettings),
    PurchaseSettings: adaptApiPurchaseSettingsResultAltDto(source?.purchaseSettings),
    SettingsId: source?.settingsId,
  };
}
