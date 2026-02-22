import { ApiMultipleTagSettingsAddDto } from '../../../swagger/models/api-multiple-tag-settings-add-dto';
import { MultipleTagSettingsAdd } from '../../models/multiple-tag-settings-add.interface';
import { searchTypeEnumAdapter } from '../enums/search-type-enum.adapter';

export const multipleTagSettingsAddAdapter = (source?: ApiMultipleTagSettingsAddDto | null): MultipleTagSettingsAdd => {
  return {
    tags: source?.Tags,
    type: source?.Type === null ? undefined : searchTypeEnumAdapter(source?.Type),
  };
}
