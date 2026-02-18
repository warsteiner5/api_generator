import { PriceListSettingsResultAlt } from '../../models/price-list-settings-result-alt.interface';
import { ApiPriceListSettingsResultAltDto } from '../../../swagger/models/api-price-list-settings-result';
import { adaptApiTagItemAltDto } from './api-tag-item.adapter';

export function adaptApiPriceListSettingsResultAltDto(source?: PriceListSettingsResultAlt | null): ApiPriceListSettingsResultAltDto {
  return {
    TagSettings: (source?.tagSettings ?? []).map((item) => adaptApiTagItemAltDto(item)),
  };
}
