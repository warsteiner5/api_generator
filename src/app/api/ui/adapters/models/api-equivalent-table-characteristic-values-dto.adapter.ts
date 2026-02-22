import { EquivalentTableCharacteristicValues } from '../../models/equivalent-table-characteristic-values.interface';
import { ApiEquivalentTableCharacteristicValuesDto } from '../../../swagger/models/api-equivalent-table-characteristic-values-dto';

export const apiEquivalentTableCharacteristicValuesDtoAdapter = (source?: EquivalentTableCharacteristicValues | null): ApiEquivalentTableCharacteristicValuesDto => {
  return {
    CharacteristicId: source?.characteristicId,
    CompetitiveListItemId: source?.competitiveListItemId,
    Id: source?.id,
    Value: source?.value,
    Value2: source?.value2,
  };
}
