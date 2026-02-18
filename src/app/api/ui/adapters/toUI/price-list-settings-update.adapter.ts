import { ApiPriceListSettingsUpdateDto } from '../../../swagger/models/api-price-list-settings-update-dto';
import { PriceListSettingsUpdate } from '../../models/price-list-settings-update.interface';

export function adaptPriceListSettingsUpdateToUI(source?: ApiPriceListSettingsUpdateDto | null): PriceListSettingsUpdate {
  return {
    deviation: source?.Deviation ?? 0,
    priceListId: source?.PriceListId ?? 0,
    regions: source?.Regions ?? [],
  };
}
