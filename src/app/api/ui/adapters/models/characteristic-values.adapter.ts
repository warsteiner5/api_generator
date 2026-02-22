import { ApiCharacteristicValuesDto } from '../../../swagger/models/api-characteristic-values-dto';
import { CharacteristicValues } from '../../models/characteristic-values.interface';
import { characteristicListValuesAdapter } from './characteristic-list-values.adapter';
import { characteristicTypeEnumAdapter } from '../enums/characteristic-type-enum.adapter';

export const characteristicValuesAdapter = (source?: ApiCharacteristicValuesDto | null): CharacteristicValues => {
  return {
    characteristicId: source?.CharacteristicId,
    comment: source?.Comment,
    id: source?.Id,
    isApproved: source?.IsApproved,
    list: source?.List?.map((item) => characteristicListValuesAdapter(item)),
    name: source?.Name,
    supplierId: source?.SupplierId,
    type: source?.Type === null ? undefined : characteristicTypeEnumAdapter(source?.Type),
    value: source?.Value,
    value2: source?.Value2,
    yesNo: source?.YesNo,
  };
}
