import { ApiSupplierCharacteristicForViewDto } from '../../../swagger/models/api-supplier-characteristic-for-view-dto';
import { SupplierCharacteristicForView } from '../../models/supplier-characteristic-for-view.interface';
import { characteristicListValuesAdapter } from './characteristic-list-values.adapter';
import { characteristicOperationEnumAdapter } from '../enums/characteristic-operation-enum.adapter';
import { characteristicTypeEnumAdapter } from '../enums/characteristic-type-enum.adapter';

export const supplierCharacteristicForViewAdapter = (source?: ApiSupplierCharacteristicForViewDto | null): SupplierCharacteristicForView => {
  return {
    isApproved: source?.IsApproved,
    list: source?.List?.map((item) => characteristicListValuesAdapter(item)),
    name: source?.Name,
    operation: source?.Operation === null ? undefined : characteristicOperationEnumAdapter(source?.Operation),
    type: source?.Type === null ? undefined : characteristicTypeEnumAdapter(source?.Type),
    value: source?.Value,
    value2: source?.Value2,
    yesNo: source?.YesNo,
  };
}
