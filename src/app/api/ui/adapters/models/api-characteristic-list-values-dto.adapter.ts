import { CharacteristicListValues } from '../../models/characteristic-list-values.interface';
import { ApiCharacteristicListValuesDto } from '../../../swagger/models/api-characteristic-list-values-dto';

export const apiCharacteristicListValuesDtoAdapter = (source?: CharacteristicListValues | null): ApiCharacteristicListValuesDto => {
  return {
    OkeiCode: source?.okeiCode,
    OkeiDescription: source?.okeiDescription,
    Value: source?.value,
  };
}
