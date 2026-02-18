import { ApiCharacteristicValuesDto } from '../../../swagger/models/api-characteristic-values-dto';
import { CharacteristicValues } from '../../models/characteristic-values.interface';
import { adaptCharacteristicListValuesToUI } from './characteristic-list-values.adapter';
import { adaptCharacteristicTypeEnumToUI } from './characteristic-type-enum.adapter';

export function adaptCharacteristicValuesToUI(source?: ApiCharacteristicValuesDto | null): CharacteristicValues {
  return {
    characteristicId: source?.CharacteristicId ?? 0,
    comment: source?.Comment ?? '',
    id: source?.Id ?? 0,
    isApproved: source?.IsApproved ?? false,
    list: (source?.List ?? []).map((item) => adaptCharacteristicListValuesToUI(item)),
    name: source?.Name ?? '',
    supplierId: source?.SupplierId ?? 0,
    type: adaptCharacteristicTypeEnumToUI(source?.Type),
    value: source?.Value ?? '',
    value2: source?.Value2 ?? '',
    yesNo: source?.YesNo ?? false,
  };
}
