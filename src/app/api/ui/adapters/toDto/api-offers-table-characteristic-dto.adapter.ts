import { OffersTableCharacteristic } from '../../models/offers-table-characteristic.interface';
import { ApiOffersTableCharacteristicDto } from '../../../swagger/models/api-offers-table-characteristic-dto';
import { adaptApiCharacteristicApprovementStatusEnum } from './api-characteristic-approvement-status-enum.adapter';
import { adaptApiCharacteristicListValuesDto } from './api-characteristic-list-values-dto.adapter';
import { adaptApiCharacteristicOperationEnum } from './api-characteristic-operation-enum.adapter';
import { adaptApiCharacteristicTypeEnum } from './api-characteristic-type-enum.adapter';
import { adaptApiOffersTableCharacteristicValuesDto } from './api-offers-table-characteristic-values-dto.adapter';

export function adaptApiOffersTableCharacteristicDto(source?: OffersTableCharacteristic | null): ApiOffersTableCharacteristicDto {
  return {
    ApprovementStatus: adaptApiCharacteristicApprovementStatusEnum(source?.approvementStatus),
    Id: source?.id,
    List: (source?.list ?? []).map((item) => adaptApiCharacteristicListValuesDto(item)),
    Name: source?.name,
    OkeiCode: source?.okeiCode,
    OkeiDescription: source?.okeiDescription,
    Operation: adaptApiCharacteristicOperationEnum(source?.operation),
    SupplierId: source?.supplierId,
    SupplierName: source?.supplierName,
    SupplierValues: (source?.supplierValues ?? []).map((item) => adaptApiOffersTableCharacteristicValuesDto(item)),
    Type: adaptApiCharacteristicTypeEnum(source?.type),
    Value: source?.value,
    Value2: source?.value2,
    YesNo: source?.yesNo,
  };
}
