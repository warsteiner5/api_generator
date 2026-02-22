import { ApiEquivalentTableCharacteristicDto } from '../../../swagger/models/api-equivalent-table-characteristic-dto';
import { EquivalentTableCharacteristic } from '../../models/equivalent-table-characteristic.interface';
import { characteristicListValuesAdapter } from './characteristic-list-values.adapter';
import { characteristicOperationEnumAdapter } from '../enums/characteristic-operation-enum.adapter';
import { characteristicTypeEnumAdapter } from '../enums/characteristic-type-enum.adapter';
import { equivalentTableCharacteristicValuesAdapter } from './equivalent-table-characteristic-values.adapter';

export const equivalentTableCharacteristicAdapter = (source?: ApiEquivalentTableCharacteristicDto | null): EquivalentTableCharacteristic => {
  return {
    id: source?.Id,
    list: source?.List?.map((item) => characteristicListValuesAdapter(item)),
    name: source?.Name,
    operation: source?.Operation === null ? undefined : characteristicOperationEnumAdapter(source?.Operation),
    supplierValues: source?.SupplierValues?.map((item) => equivalentTableCharacteristicValuesAdapter(item)),
    type: source?.Type === null ? undefined : characteristicTypeEnumAdapter(source?.Type),
    value: source?.Value,
    value2: source?.Value2,
    yesNo: source?.YesNo,
  };
}
