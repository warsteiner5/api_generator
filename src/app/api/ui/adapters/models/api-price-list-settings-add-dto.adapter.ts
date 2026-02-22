import { PriceListSettingsAdd } from '../../models/price-list-settings-add.interface';
import { ApiPriceListSettingsAddDto } from '../../../swagger/models/api-price-list-settings-add-dto';

export const apiPriceListSettingsAddDtoAdapter = (source?: PriceListSettingsAdd | null): ApiPriceListSettingsAddDto => {
  return {
    PriceListId: source?.priceListId,
  };
}
