import { ApiCharacteristicDto } from '../../../swagger/models/api-characteristic-dto';
import { Characteristic } from '../../models/characteristic.interface';
import { characteristicApprovementStatusEnumAdapter } from '../enums/characteristic-approvement-status-enum.adapter';
import { characteristicListValuesAdapter } from './characteristic-list-values.adapter';
import { characteristicOperationEnumAdapter } from '../enums/characteristic-operation-enum.adapter';
import { characteristicTypeEnumAdapter } from '../enums/characteristic-type-enum.adapter';
import { characteristicValuesAdapter } from './characteristic-values.adapter';

export const characteristicAdapter = (source?: ApiCharacteristicDto | null): Characteristic => {
  return {
    approvementStatus: source?.ApprovementStatus === null ? undefined : characteristicApprovementStatusEnumAdapter(source?.ApprovementStatus),
    id: source?.Id,
    isApproved: source?.IsApproved,
    list: source?.List?.map((item) => characteristicListValuesAdapter(item)),
    name: source?.Name,
    okeiCode: source?.OkeiCode,
    okeiDescription: source?.OkeiDescription,
    okpd2: source?.Okpd2,
    operation: source?.Operation === null ? undefined : characteristicOperationEnumAdapter(source?.Operation),
    requirementRequestId: source?.RequirementRequestId,
    supplierValues: source?.SupplierValues?.map((item) => characteristicValuesAdapter(item)),
    type: source?.Type === null ? undefined : characteristicTypeEnumAdapter(source?.Type),
    value: source?.Value,
    value2: source?.Value2,
    yesNo: source?.YesNo,
  };
}
