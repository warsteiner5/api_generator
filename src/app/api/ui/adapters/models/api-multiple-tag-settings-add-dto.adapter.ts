import { MultipleTagSettingsAdd } from '../../models/multiple-tag-settings-add.interface';
import { ApiMultipleTagSettingsAddDto } from '../../../swagger/models/api-multiple-tag-settings-add-dto';
import { apiSearchTypeEnumAdapter } from '../enums/api-search-type-enum.adapter';

export const apiMultipleTagSettingsAddDtoAdapter = (source?: MultipleTagSettingsAdd | null): ApiMultipleTagSettingsAddDto => {
  return {
    Tags: source?.tags,
    Type: source?.type === null ? undefined : apiSearchTypeEnumAdapter(source?.type),
  };
}
