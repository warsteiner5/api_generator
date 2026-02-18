import { ApiEquivalentTableCharacteristicDto } from '../../../swagger/models/api-equivalent-table-characteristic-dto';
import { EquivalentTableCharacteristic } from '../../models/equivalent-table-characteristic.interface';
import { adaptCharacteristicListValuesToUI } from './characteristic-list-values.adapter';
import { adaptCharacteristicOperationEnumToUI } from './characteristic-operation-enum.adapter';
import { adaptCharacteristicTypeEnumToUI } from './characteristic-type-enum.adapter';
import { adaptEquivalentTableCharacteristicValuesToUI } from './equivalent-table-characteristic-values.adapter';

export function adaptEquivalentTableCharacteristicToUI(source?: ApiEquivalentTableCharacteristicDto | null): EquivalentTableCharacteristic {
  return {
    id: source?.Id ?? 0,
    list: (source?.List ?? []).map((item) => adaptCharacteristicListValuesToUI(item)),
    name: source?.Name ?? '',
    operation: adaptCharacteristicOperationEnumToUI(source?.Operation),
    supplierValues: (source?.SupplierValues ?? []).map((item) => adaptEquivalentTableCharacteristicValuesToUI(item)),
    type: adaptCharacteristicTypeEnumToUI(source?.Type),
    value: source?.Value ?? '',
    value2: source?.Value2 ?? '',
    yesNo: source?.YesNo ?? false,
  };
}
