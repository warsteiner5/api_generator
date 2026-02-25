import { ApiTagSettingsUpdateDto } from '../../../swagger/models/api-tag-settings-update-dto';
import { TagSettingsUpdate } from '../../models/tag-settings-update.interface';
import { tagSettingsAddAdapter } from './tag-settings-add.adapter';

export const tagSettingsUpdateAdapter = (source?: ApiTagSettingsUpdateDto | null): TagSettingsUpdate => {
  return {
    ...tagSettingsAddAdapter(source as unknown as Parameters<typeof tagSettingsAddAdapter>[0]),
    settingsId: source?.SettingsId,
    priceFrom: source?.PriceFrom,
    priceTo: source?.PriceTo,
    regions: source?.Regions,
  };
}
