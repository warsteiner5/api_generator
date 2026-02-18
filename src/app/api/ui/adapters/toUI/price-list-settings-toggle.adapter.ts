import { ApiPriceListSettingsToggleDto } from '../../../swagger/models/api-price-list-settings-toggle-dto';
import { PriceListSettingsToggle } from '../../models/price-list-settings-toggle.interface';

export function adaptPriceListSettingsToggleToUI(source?: ApiPriceListSettingsToggleDto | null): PriceListSettingsToggle {
  return {
    priceListId: source?.PriceListId ?? 0,
    regions: source?.Regions ?? [],
  };
}
