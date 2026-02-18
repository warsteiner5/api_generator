import { ApiTagSettingsAddDto } from '../../../swagger/models/api-tag-settings-add-dto';
import { TagSettingsAdd } from '../../models/tag-settings-add.interface';
import { adaptSearchTypeEnumToUI } from './search-type-enum.adapter';

export function adaptTagSettingsAddToUI(source?: ApiTagSettingsAddDto | null): TagSettingsAdd {
  return {
    tag: source?.Tag ?? '',
    type: adaptSearchTypeEnumToUI(source?.Type),
  };
}
