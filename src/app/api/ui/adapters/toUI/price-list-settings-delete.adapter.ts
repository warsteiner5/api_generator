import { ApiPriceListSettingsDeleteDto } from '../../../swagger/models/api-price-list-settings-delete-dto';
import { PriceListSettingsDelete } from '../../models/price-list-settings-delete.interface';

export function adaptPriceListSettingsDeleteToUI(source?: ApiPriceListSettingsDeleteDto | null): PriceListSettingsDelete {
  return {
    priceListId: source?.PriceListId ?? 0,
  };
}
