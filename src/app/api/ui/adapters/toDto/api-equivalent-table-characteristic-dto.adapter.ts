import { EquivalentTableCharacteristic } from '../../models/equivalent-table-characteristic.interface';
import { ApiEquivalentTableCharacteristicDto } from '../../../swagger/models/api-equivalent-table-characteristic-dto';
import { adaptApiCharacteristicListValuesDto } from './api-characteristic-list-values-dto.adapter';
import { adaptApiCharacteristicOperationEnum } from './api-characteristic-operation-enum.adapter';
import { adaptApiCharacteristicTypeEnum } from './api-characteristic-type-enum.adapter';
import { adaptApiEquivalentTableCharacteristicValuesDto } from './api-equivalent-table-characteristic-values-dto.adapter';

export function adaptApiEquivalentTableCharacteristicDto(source?: EquivalentTableCharacteristic | null): ApiEquivalentTableCharacteristicDto {
  return {
    Id: source?.id,
    List: (source?.list ?? []).map((item) => adaptApiCharacteristicListValuesDto(item)),
    Name: source?.name,
    Operation: adaptApiCharacteristicOperationEnum(source?.operation),
    SupplierValues: (source?.supplierValues ?? []).map((item) => adaptApiEquivalentTableCharacteristicValuesDto(item)),
    Type: adaptApiCharacteristicTypeEnum(source?.type),
    Value: source?.value,
    Value2: source?.value2,
    YesNo: source?.yesNo,
  };
}
