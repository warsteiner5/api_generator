import { ApiCharacteristicListValuesDto } from '../../../swagger/models/api-characteristic-list-values-dto';
import { CharacteristicListValues } from '../../models/characteristic-list-values.interface';

export function adaptCharacteristicListValuesToUI(source?: ApiCharacteristicListValuesDto | null): CharacteristicListValues {
  return {
    okeiCode: source?.OkeiCode ?? '',
    okeiDescription: source?.OkeiDescription ?? '',
    value: source?.Value ?? '',
  };
}
