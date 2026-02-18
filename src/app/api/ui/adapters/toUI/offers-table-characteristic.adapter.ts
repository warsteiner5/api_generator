import { ApiOffersTableCharacteristicDto } from '../../../swagger/models/api-offers-table-characteristic-dto';
import { OffersTableCharacteristic } from '../../models/offers-table-characteristic.interface';
import { adaptCharacteristicApprovementStatusEnumToUI } from './characteristic-approvement-status-enum.adapter';
import { adaptCharacteristicListValuesToUI } from './characteristic-list-values.adapter';
import { adaptCharacteristicOperationEnumToUI } from './characteristic-operation-enum.adapter';
import { adaptCharacteristicTypeEnumToUI } from './characteristic-type-enum.adapter';
import { adaptOffersTableCharacteristicValuesToUI } from './offers-table-characteristic-values.adapter';

export function adaptOffersTableCharacteristicToUI(source?: ApiOffersTableCharacteristicDto | null): OffersTableCharacteristic {
  return {
    approvementStatus: adaptCharacteristicApprovementStatusEnumToUI(source?.ApprovementStatus),
    id: source?.Id ?? 0,
    list: (source?.List ?? []).map((item) => adaptCharacteristicListValuesToUI(item)),
    name: source?.Name ?? '',
    okeiCode: source?.OkeiCode ?? '',
    okeiDescription: source?.OkeiDescription ?? '',
    operation: adaptCharacteristicOperationEnumToUI(source?.Operation),
    supplierId: source?.SupplierId ?? 0,
    supplierName: source?.SupplierName ?? '',
    supplierValues: (source?.SupplierValues ?? []).map((item) => adaptOffersTableCharacteristicValuesToUI(item)),
    type: adaptCharacteristicTypeEnumToUI(source?.Type),
    value: source?.Value ?? '',
    value2: source?.Value2 ?? '',
    yesNo: source?.YesNo ?? false,
  };
}
