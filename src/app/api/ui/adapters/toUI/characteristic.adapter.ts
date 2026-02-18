import { ApiCharacteristicDto } from '../../../swagger/models/api-characteristic-dto';
import { Characteristic } from '../../models/characteristic.interface';
import { adaptCharacteristicApprovementStatusEnumToUI } from './characteristic-approvement-status-enum.adapter';
import { adaptCharacteristicListValuesToUI } from './characteristic-list-values.adapter';
import { adaptCharacteristicOperationEnumToUI } from './characteristic-operation-enum.adapter';
import { adaptCharacteristicTypeEnumToUI } from './characteristic-type-enum.adapter';
import { adaptCharacteristicValuesToUI } from './characteristic-values.adapter';

export function adaptCharacteristicToUI(source?: ApiCharacteristicDto | null): Characteristic {
  return {
    approvementStatus: adaptCharacteristicApprovementStatusEnumToUI(source?.ApprovementStatus),
    id: source?.Id ?? 0,
    isApproved: source?.IsApproved ?? false,
    list: (source?.List ?? []).map((item) => adaptCharacteristicListValuesToUI(item)),
    name: source?.Name ?? '',
    okeiCode: source?.OkeiCode ?? '',
    okeiDescription: source?.OkeiDescription ?? '',
    okpd2: source?.Okpd2 ?? '',
    operation: adaptCharacteristicOperationEnumToUI(source?.Operation),
    requirementRequestId: source?.RequirementRequestId ?? 0,
    supplierValues: (source?.SupplierValues ?? []).map((item) => adaptCharacteristicValuesToUI(item)),
    type: adaptCharacteristicTypeEnumToUI(source?.Type),
    value: source?.Value ?? '',
    value2: source?.Value2 ?? '',
    yesNo: source?.YesNo ?? false,
  };
}
