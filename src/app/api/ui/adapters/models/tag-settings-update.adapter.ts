import { ApiTagSettingsUpdateDto } from '../../../swagger/models/api-tag-settings-update-dto';
import { TagSettingsUpdate } from '../../models/tag-settings-update.interface';

export const tagSettingsUpdateAdapter = (source?: ApiTagSettingsUpdateDto | null): TagSettingsUpdate => {
  return (source ?? {}) as TagSettingsUpdate;
}
