import { TagSettingsUpdate } from '../../models/tag-settings-update.interface';
import { ApiTagSettingsUpdateDto } from '../../../swagger/models/api-tag-settings-update-dto';
import { apiTagSettingsAddDtoAdapter } from './api-tag-settings-add-dto.adapter';

export const apiTagSettingsUpdateDtoAdapter = (source?: TagSettingsUpdate | null): ApiTagSettingsUpdateDto => {
  return {
    ...apiTagSettingsAddDtoAdapter(source as unknown as Parameters<typeof apiTagSettingsAddDtoAdapter>[0]),
    SettingsId: source?.settingsId,
    PriceFrom: source?.priceFrom,
    PriceTo: source?.priceTo,
    Regions: source?.regions,
  };
}
