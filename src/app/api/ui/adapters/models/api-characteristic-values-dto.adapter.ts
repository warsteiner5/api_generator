import { CharacteristicValues } from '../../models/characteristic-values.interface';
import { ApiCharacteristicValuesDto } from '../../../swagger/models/api-characteristic-values-dto';
import { apiCharacteristicListValuesDtoAdapter } from './api-characteristic-list-values-dto.adapter';
import { apiCharacteristicTypeEnumAdapter } from '../enums/api-characteristic-type-enum.adapter';

export const apiCharacteristicValuesDtoAdapter = (source?: CharacteristicValues | null): ApiCharacteristicValuesDto => {
  return {
    CharacteristicId: source?.characteristicId,
    Comment: source?.comment,
    Id: source?.id,
    IsApproved: source?.isApproved,
    List: source?.list?.map((item) => apiCharacteristicListValuesDtoAdapter(item)),
    Name: source?.name,
    SupplierId: source?.supplierId,
    Type: source?.type === null ? undefined : apiCharacteristicTypeEnumAdapter(source?.type),
    Value: source?.value,
    Value2: source?.value2,
    YesNo: source?.yesNo,
  };
}
