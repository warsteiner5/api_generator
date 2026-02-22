import { PriceListSettingsUpdate } from '../../models/price-list-settings-update.interface';
import { ApiPriceListSettingsUpdateDto } from '../../../swagger/models/api-price-list-settings-update-dto';

export const apiPriceListSettingsUpdateDtoAdapter = (source?: PriceListSettingsUpdate | null): ApiPriceListSettingsUpdateDto => {
  return {
    Deviation: source?.deviation,
    PriceListId: source?.priceListId,
    Regions: source?.regions,
  };
}
