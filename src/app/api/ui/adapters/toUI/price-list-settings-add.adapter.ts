import { ApiPriceListSettingsAddDto } from '../../../swagger/models/api-price-list-settings-add-dto';
import { PriceListSettingsAdd } from '../../models/price-list-settings-add.interface';

export function adaptPriceListSettingsAddToUI(source?: ApiPriceListSettingsAddDto | null): PriceListSettingsAdd {
  return {
    priceListId: source?.PriceListId ?? 0,
  };
}
