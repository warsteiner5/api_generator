import { EquivalentTableCharacteristic } from '../../models/equivalent-table-characteristic.interface';
import { ApiEquivalentTableCharacteristicDto } from '../../../swagger/models/api-equivalent-table-characteristic-dto';
import { apiCharacteristicListValuesDtoAdapter } from './api-characteristic-list-values-dto.adapter';
import { apiCharacteristicOperationEnumAdapter } from '../enums/api-characteristic-operation-enum.adapter';
import { apiCharacteristicTypeEnumAdapter } from '../enums/api-characteristic-type-enum.adapter';
import { apiEquivalentTableCharacteristicValuesDtoAdapter } from './api-equivalent-table-characteristic-values-dto.adapter';

export const apiEquivalentTableCharacteristicDtoAdapter = (source?: EquivalentTableCharacteristic | null): ApiEquivalentTableCharacteristicDto => {
  return {
    Id: source?.id,
    List: source?.list?.map((item) => apiCharacteristicListValuesDtoAdapter(item)),
    Name: source?.name,
    Operation: source?.operation === null ? undefined : apiCharacteristicOperationEnumAdapter(source?.operation),
    SupplierValues: source?.supplierValues?.map((item) => apiEquivalentTableCharacteristicValuesDtoAdapter(item)),
    Type: source?.type === null ? undefined : apiCharacteristicTypeEnumAdapter(source?.type),
    Value: source?.value,
    Value2: source?.value2,
    YesNo: source?.yesNo,
  };
}
