import { CharacteristicValues } from '../../models/characteristic-values.interface';
import { ApiCharacteristicValuesDto } from '../../../swagger/models/api-characteristic-values-dto';
import { adaptApiCharacteristicListValuesDto } from './api-characteristic-list-values-dto.adapter';
import { adaptApiCharacteristicTypeEnum } from './api-characteristic-type-enum.adapter';

export function adaptApiCharacteristicValuesDto(source?: CharacteristicValues | null): ApiCharacteristicValuesDto {
  return {
    CharacteristicId: source?.characteristicId,
    Comment: source?.comment,
    Id: source?.id,
    IsApproved: source?.isApproved,
    List: (source?.list ?? []).map((item) => adaptApiCharacteristicListValuesDto(item)),
    Name: source?.name,
    SupplierId: source?.supplierId,
    Type: adaptApiCharacteristicTypeEnum(source?.type),
    Value: source?.value,
    Value2: source?.value2,
    YesNo: source?.yesNo,
  };
}
