import { ApiPriceListSettingsDeleteDto } from '../../../swagger/models/api-price-list-settings-delete-dto';
import { PriceListSettingsDelete } from '../../models/price-list-settings-delete.interface';

export const priceListSettingsDeleteAdapter = (source?: ApiPriceListSettingsDeleteDto | null): PriceListSettingsDelete => {
  return {
    priceListId: source?.PriceListId,
  };
}
