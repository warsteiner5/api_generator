import { PriceListSettingsDelete } from '../../models/price-list-settings-delete.interface';
import { ApiPriceListSettingsDeleteDto } from '../../../swagger/models/api-price-list-settings-delete-dto';

export const apiPriceListSettingsDeleteDtoAdapter = (source?: PriceListSettingsDelete | null): ApiPriceListSettingsDeleteDto => {
  return {
    PriceListId: source?.priceListId,
  };
}
