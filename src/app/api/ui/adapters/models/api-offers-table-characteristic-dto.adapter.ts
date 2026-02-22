import { OffersTableCharacteristic } from '../../models/offers-table-characteristic.interface';
import { ApiOffersTableCharacteristicDto } from '../../../swagger/models/api-offers-table-characteristic-dto';
import { apiCharacteristicApprovementStatusEnumAdapter } from '../enums/api-characteristic-approvement-status-enum.adapter';
import { apiCharacteristicListValuesDtoAdapter } from './api-characteristic-list-values-dto.adapter';
import { apiCharacteristicOperationEnumAdapter } from '../enums/api-characteristic-operation-enum.adapter';
import { apiCharacteristicTypeEnumAdapter } from '../enums/api-characteristic-type-enum.adapter';
import { apiOffersTableCharacteristicValuesDtoAdapter } from './api-offers-table-characteristic-values-dto.adapter';

export const apiOffersTableCharacteristicDtoAdapter = (source?: OffersTableCharacteristic | null): ApiOffersTableCharacteristicDto => {
  return {
    ApprovementStatus: source?.approvementStatus === null ? undefined : apiCharacteristicApprovementStatusEnumAdapter(source?.approvementStatus),
    Id: source?.id,
    List: source?.list?.map((item) => apiCharacteristicListValuesDtoAdapter(item)),
    Name: source?.name,
    OkeiCode: source?.okeiCode,
    OkeiDescription: source?.okeiDescription,
    Operation: source?.operation === null ? undefined : apiCharacteristicOperationEnumAdapter(source?.operation),
    SupplierId: source?.supplierId,
    SupplierName: source?.supplierName,
    SupplierValues: source?.supplierValues?.map((item) => apiOffersTableCharacteristicValuesDtoAdapter(item)),
    Type: source?.type === null ? undefined : apiCharacteristicTypeEnumAdapter(source?.type),
    Value: source?.value,
    Value2: source?.value2,
    YesNo: source?.yesNo,
  };
}
