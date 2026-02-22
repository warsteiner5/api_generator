import { ApiEquivalentTableCharacteristicValuesDto } from '../../../swagger/models/api-equivalent-table-characteristic-values-dto';
import { EquivalentTableCharacteristicValues } from '../../models/equivalent-table-characteristic-values.interface';

export const equivalentTableCharacteristicValuesAdapter = (source?: ApiEquivalentTableCharacteristicValuesDto | null): EquivalentTableCharacteristicValues => {
  return {
    characteristicId: source?.CharacteristicId,
    competitiveListItemId: source?.CompetitiveListItemId,
    id: source?.Id,
    value: source?.Value,
    value2: source?.Value2,
  };
}
