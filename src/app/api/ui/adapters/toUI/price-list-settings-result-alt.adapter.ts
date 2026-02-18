import { ApiPriceListSettingsResultAltDto } from '../../../swagger/models/api-price-list-settings-result';
import { PriceListSettingsResultAlt } from '../../models/price-list-settings-result-alt.interface';
import { adaptTagItemAltToUI } from './tag-item-alt.adapter';

export function adaptPriceListSettingsResultAltToUI(source?: ApiPriceListSettingsResultAltDto | null): PriceListSettingsResultAlt {
  return {
    tagSettings: (source?.TagSettings ?? []).map((item) => adaptTagItemAltToUI(item)),
  };
}
