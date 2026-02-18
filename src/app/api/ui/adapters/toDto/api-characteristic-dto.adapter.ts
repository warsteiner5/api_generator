import { Characteristic } from '../../models/characteristic.interface';
import { ApiCharacteristicDto } from '../../../swagger/models/api-characteristic-dto';
import { adaptApiCharacteristicApprovementStatusEnum } from './api-characteristic-approvement-status-enum.adapter';
import { adaptApiCharacteristicListValuesDto } from './api-characteristic-list-values-dto.adapter';
import { adaptApiCharacteristicOperationEnum } from './api-characteristic-operation-enum.adapter';
import { adaptApiCharacteristicTypeEnum } from './api-characteristic-type-enum.adapter';
import { adaptApiCharacteristicValuesDto } from './api-characteristic-values-dto.adapter';

export function adaptApiCharacteristicDto(source?: Characteristic | null): ApiCharacteristicDto {
  return {
    ApprovementStatus: adaptApiCharacteristicApprovementStatusEnum(source?.approvementStatus),
    Id: source?.id,
    IsApproved: source?.isApproved,
    List: (source?.list ?? []).map((item) => adaptApiCharacteristicListValuesDto(item)),
    Name: source?.name,
    OkeiCode: source?.okeiCode,
    OkeiDescription: source?.okeiDescription,
    Okpd2: source?.okpd2,
    Operation: adaptApiCharacteristicOperationEnum(source?.operation),
    RequirementRequestId: source?.requirementRequestId,
    SupplierValues: (source?.supplierValues ?? []).map((item) => adaptApiCharacteristicValuesDto(item)),
    Type: adaptApiCharacteristicTypeEnum(source?.type),
    Value: source?.value,
    Value2: source?.value2,
    YesNo: source?.yesNo,
  };
}
