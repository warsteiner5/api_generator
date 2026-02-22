import { ApiPriceListSettingsResultAltDto } from '../../../swagger/models/api-price-list-settings-result';
import { PriceListSettingsResultAlt } from '../../models/price-list-settings-result-alt.interface';
import { tagItemAltAdapter } from './tag-item-alt.adapter';

export const priceListSettingsResultAltAdapter = (source?: ApiPriceListSettingsResultAltDto | null): PriceListSettingsResultAlt => {
  return {
    tagSettings: source?.TagSettings?.map((item) => tagItemAltAdapter(item)),
  };
}
