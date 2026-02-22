import { ApiPriceListSettingsToggleDto } from '../../../swagger/models/api-price-list-settings-toggle-dto';
import { PriceListSettingsToggle } from '../../models/price-list-settings-toggle.interface';

export const priceListSettingsToggleAdapter = (source?: ApiPriceListSettingsToggleDto | null): PriceListSettingsToggle => {
  return {
    priceListId: source?.PriceListId,
    regions: source?.Regions,
  };
}
