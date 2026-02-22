import { TagSettingsUpdate } from '../../models/tag-settings-update.interface';
import { ApiTagSettingsUpdateDto } from '../../../swagger/models/api-tag-settings-update-dto';

export const apiTagSettingsUpdateDtoAdapter = (source?: TagSettingsUpdate | null): ApiTagSettingsUpdateDto => {
  return (source ?? {}) as ApiTagSettingsUpdateDto;
}
