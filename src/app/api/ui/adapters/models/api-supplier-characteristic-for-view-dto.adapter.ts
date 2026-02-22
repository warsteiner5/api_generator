import { SupplierCharacteristicForView } from '../../models/supplier-characteristic-for-view.interface';
import { ApiSupplierCharacteristicForViewDto } from '../../../swagger/models/api-supplier-characteristic-for-view-dto';
import { apiCharacteristicListValuesDtoAdapter } from './api-characteristic-list-values-dto.adapter';
import { apiCharacteristicOperationEnumAdapter } from '../enums/api-characteristic-operation-enum.adapter';
import { apiCharacteristicTypeEnumAdapter } from '../enums/api-characteristic-type-enum.adapter';

export const apiSupplierCharacteristicForViewDtoAdapter = (source?: SupplierCharacteristicForView | null): ApiSupplierCharacteristicForViewDto => {
  return {
    IsApproved: source?.isApproved,
    List: source?.list?.map((item) => apiCharacteristicListValuesDtoAdapter(item)),
    Name: source?.name,
    Operation: source?.operation === null ? undefined : apiCharacteristicOperationEnumAdapter(source?.operation),
    Type: source?.type === null ? undefined : apiCharacteristicTypeEnumAdapter(source?.type),
    Value: source?.value,
    Value2: source?.value2,
    YesNo: source?.yesNo,
  };
}
