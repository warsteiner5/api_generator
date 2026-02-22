import { ApiOffersTableCharacteristicDto } from '../../../swagger/models/api-offers-table-characteristic-dto';
import { OffersTableCharacteristic } from '../../models/offers-table-characteristic.interface';
import { characteristicApprovementStatusEnumAdapter } from '../enums/characteristic-approvement-status-enum.adapter';
import { characteristicListValuesAdapter } from './characteristic-list-values.adapter';
import { characteristicOperationEnumAdapter } from '../enums/characteristic-operation-enum.adapter';
import { characteristicTypeEnumAdapter } from '../enums/characteristic-type-enum.adapter';
import { offersTableCharacteristicValuesAdapter } from './offers-table-characteristic-values.adapter';

export const offersTableCharacteristicAdapter = (source?: ApiOffersTableCharacteristicDto | null): OffersTableCharacteristic => {
  return {
    approvementStatus: source?.ApprovementStatus === null ? undefined : characteristicApprovementStatusEnumAdapter(source?.ApprovementStatus),
    id: source?.Id,
    list: source?.List?.map((item) => characteristicListValuesAdapter(item)),
    name: source?.Name,
    okeiCode: source?.OkeiCode,
    okeiDescription: source?.OkeiDescription,
    operation: source?.Operation === null ? undefined : characteristicOperationEnumAdapter(source?.Operation),
    supplierId: source?.SupplierId,
    supplierName: source?.SupplierName,
    supplierValues: source?.SupplierValues?.map((item) => offersTableCharacteristicValuesAdapter(item)),
    type: source?.Type === null ? undefined : characteristicTypeEnumAdapter(source?.Type),
    value: source?.Value,
    value2: source?.Value2,
    yesNo: source?.YesNo,
  };
}
