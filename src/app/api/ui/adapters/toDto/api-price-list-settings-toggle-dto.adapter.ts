import { PriceListSettingsToggle } from '../../models/price-list-settings-toggle.interface';
import { ApiPriceListSettingsToggleDto } from '../../../swagger/models/api-price-list-settings-toggle-dto';

export function adaptApiPriceListSettingsToggleDto(source?: PriceListSettingsToggle | null): ApiPriceListSettingsToggleDto {
  return {
    PriceListId: source?.priceListId,
    Regions: source?.regions ?? [],
  };
}
