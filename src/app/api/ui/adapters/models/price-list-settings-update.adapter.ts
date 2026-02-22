import { ApiPriceListSettingsUpdateDto } from '../../../swagger/models/api-price-list-settings-update-dto';
import { PriceListSettingsUpdate } from '../../models/price-list-settings-update.interface';

export const priceListSettingsUpdateAdapter = (source?: ApiPriceListSettingsUpdateDto | null): PriceListSettingsUpdate => {
  return {
    deviation: source?.Deviation,
    priceListId: source?.PriceListId,
    regions: source?.Regions,
  };
}
