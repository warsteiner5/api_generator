import { ApiEquivalentTableCharacteristicValuesDto } from '../../../swagger/models/api-equivalent-table-characteristic-values-dto';
import { EquivalentTableCharacteristicValues } from '../../models/equivalent-table-characteristic-values.interface';

export function adaptEquivalentTableCharacteristicValuesToUI(source?: ApiEquivalentTableCharacteristicValuesDto | null): EquivalentTableCharacteristicValues {
  return {
    characteristicId: source?.CharacteristicId ?? 0,
    competitiveListItemId: source?.CompetitiveListItemId ?? 0,
    id: source?.Id ?? 0,
    value: source?.Value ?? '',
    value2: source?.Value2 ?? '',
  };
}
