import { MultipleTagSettingsAdd } from '../../models/multiple-tag-settings-add.interface';
import { ApiMultipleTagSettingsAddDto } from '../../../swagger/models/api-multiple-tag-settings-add-dto';
import { adaptApiSearchTypeEnum } from './api-search-type-enum.adapter';

export function adaptApiMultipleTagSettingsAddDto(source?: MultipleTagSettingsAdd | null): ApiMultipleTagSettingsAddDto {
  return {
    Tags: source?.tags ?? [],
    Type: adaptApiSearchTypeEnum(source?.type),
  };
}
