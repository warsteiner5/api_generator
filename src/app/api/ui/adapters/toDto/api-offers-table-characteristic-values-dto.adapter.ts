import { OffersTableCharacteristicValues } from '../../models/offers-table-characteristic-values.interface';
import { ApiOffersTableCharacteristicValuesDto } from '../../../swagger/models/api-offers-table-characteristic-values-dto';
import { adaptApiCompetitiveListItemStateEnum } from './api-competitive-list-item-state-enum.adapter';

export function adaptApiOffersTableCharacteristicValuesDto(source?: OffersTableCharacteristicValues | null): ApiOffersTableCharacteristicValuesDto {
  return {
    CharacteristicId: source?.characteristicId,
    Comment: source?.comment,
    CompetitiveListItemId: source?.competitiveListItemId,
    CompetitiveListItemState: adaptApiCompetitiveListItemStateEnum(source?.competitiveListItemState),
    Id: source?.id,
    SupplierId: source?.supplierId,
    SupplierName: source?.supplierName,
    Value: source?.value,
    Value2: source?.value2,
  };
}
