import { Characteristic } from '../../models/characteristic.interface';
import { ApiCharacteristicDto } from '../../../swagger/models/api-characteristic-dto';
import { apiCharacteristicApprovementStatusEnumAdapter } from '../enums/api-characteristic-approvement-status-enum.adapter';
import { apiCharacteristicListValuesDtoAdapter } from './api-characteristic-list-values-dto.adapter';
import { apiCharacteristicOperationEnumAdapter } from '../enums/api-characteristic-operation-enum.adapter';
import { apiCharacteristicTypeEnumAdapter } from '../enums/api-characteristic-type-enum.adapter';
import { apiCharacteristicValuesDtoAdapter } from './api-characteristic-values-dto.adapter';

export const apiCharacteristicDtoAdapter = (source?: Characteristic | null): ApiCharacteristicDto => {
  return {
    ApprovementStatus: source?.approvementStatus === null ? undefined : apiCharacteristicApprovementStatusEnumAdapter(source?.approvementStatus),
    Id: source?.id,
    IsApproved: source?.isApproved,
    List: source?.list?.map((item) => apiCharacteristicListValuesDtoAdapter(item)),
    Name: source?.name,
    OkeiCode: source?.okeiCode,
    OkeiDescription: source?.okeiDescription,
    Okpd2: source?.okpd2,
    Operation: source?.operation === null ? undefined : apiCharacteristicOperationEnumAdapter(source?.operation),
    RequirementRequestId: source?.requirementRequestId,
    SupplierValues: source?.supplierValues?.map((item) => apiCharacteristicValuesDtoAdapter(item)),
    Type: source?.type === null ? undefined : apiCharacteristicTypeEnumAdapter(source?.type),
    Value: source?.value,
    Value2: source?.value2,
    YesNo: source?.yesNo,
  };
}
