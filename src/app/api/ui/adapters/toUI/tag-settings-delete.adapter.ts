import { ApiTagSettingsDeleteDto } from '../../../swagger/models/api-tag-settings-delete-dto';
import { TagSettingsDelete } from '../../models/tag-settings-delete.interface';
import { adaptSearchTypeEnumToUI } from './search-type-enum.adapter';

export function adaptTagSettingsDeleteToUI(source?: ApiTagSettingsDeleteDto | null): TagSettingsDelete {
  return {
    tagSettingsId: source?.TagSettingsId ?? '',
    type: adaptSearchTypeEnumToUI(source?.Type),
  };
}
