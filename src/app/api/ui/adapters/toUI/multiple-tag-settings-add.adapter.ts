import { ApiMultipleTagSettingsAddDto } from '../../../swagger/models/api-multiple-tag-settings-add-dto';
import { MultipleTagSettingsAdd } from '../../models/multiple-tag-settings-add.interface';
import { adaptSearchTypeEnumToUI } from './search-type-enum.adapter';

export function adaptMultipleTagSettingsAddToUI(source?: ApiMultipleTagSettingsAddDto | null): MultipleTagSettingsAdd {
  return {
    tags: source?.Tags ?? [],
    type: adaptSearchTypeEnumToUI(source?.Type),
  };
}
