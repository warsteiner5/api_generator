import { PriceListSettingsResultAlt } from '../../models/price-list-settings-result-alt.interface';
import { ApiPriceListSettingsResultAltDto } from '../../../swagger/models/api-price-list-settings-result';
import { apiTagItemAltDtoAdapter } from './api-tag-item.adapter';

export const apiPriceListSettingsResultAltDtoAdapter = (source?: PriceListSettingsResultAlt | null): ApiPriceListSettingsResultAltDto => {
  return {
    TagSettings: source?.tagSettings?.map((item) => apiTagItemAltDtoAdapter(item)),
  };
}
