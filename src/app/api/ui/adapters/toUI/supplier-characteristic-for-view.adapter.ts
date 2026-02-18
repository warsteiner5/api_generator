import { ApiSupplierCharacteristicForViewDto } from '../../../swagger/models/api-supplier-characteristic-for-view-dto';
import { SupplierCharacteristicForView } from '../../models/supplier-characteristic-for-view.interface';
import { adaptCharacteristicListValuesToUI } from './characteristic-list-values.adapter';
import { adaptCharacteristicOperationEnumToUI } from './characteristic-operation-enum.adapter';
import { adaptCharacteristicTypeEnumToUI } from './characteristic-type-enum.adapter';

export function adaptSupplierCharacteristicForViewToUI(source?: ApiSupplierCharacteristicForViewDto | null): SupplierCharacteristicForView {
  return {
    isApproved: source?.IsApproved ?? false,
    list: (source?.List ?? []).map((item) => adaptCharacteristicListValuesToUI(item)),
    name: source?.Name ?? '',
    operation: adaptCharacteristicOperationEnumToUI(source?.Operation),
    type: adaptCharacteristicTypeEnumToUI(source?.Type),
    value: source?.Value ?? '',
    value2: source?.Value2 ?? '',
    yesNo: source?.YesNo ?? false,
  };
}
