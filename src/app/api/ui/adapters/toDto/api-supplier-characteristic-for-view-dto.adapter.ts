import { SupplierCharacteristicForView } from '../../models/supplier-characteristic-for-view.interface';
import { ApiSupplierCharacteristicForViewDto } from '../../../swagger/models/api-supplier-characteristic-for-view-dto';
import { adaptApiCharacteristicListValuesDto } from './api-characteristic-list-values-dto.adapter';
import { adaptApiCharacteristicOperationEnum } from './api-characteristic-operation-enum.adapter';
import { adaptApiCharacteristicTypeEnum } from './api-characteristic-type-enum.adapter';

export function adaptApiSupplierCharacteristicForViewDto(source?: SupplierCharacteristicForView | null): ApiSupplierCharacteristicForViewDto {
  return {
    IsApproved: source?.isApproved,
    List: (source?.list ?? []).map((item) => adaptApiCharacteristicListValuesDto(item)),
    Name: source?.name,
    Operation: adaptApiCharacteristicOperationEnum(source?.operation),
    Type: adaptApiCharacteristicTypeEnum(source?.type),
    Value: source?.value,
    Value2: source?.value2,
    YesNo: source?.yesNo,
  };
}
