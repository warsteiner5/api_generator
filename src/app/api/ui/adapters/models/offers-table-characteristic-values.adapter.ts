import { ApiOffersTableCharacteristicValuesDto } from '../../../swagger/models/api-offers-table-characteristic-values-dto';
import { OffersTableCharacteristicValues } from '../../models/offers-table-characteristic-values.interface';
import { competitiveListItemStateEnumAdapter } from '../enums/competitive-list-item-state-enum.adapter';

export const offersTableCharacteristicValuesAdapter = (source?: ApiOffersTableCharacteristicValuesDto | null): OffersTableCharacteristicValues => {
  return {
    characteristicId: source?.CharacteristicId,
    comment: source?.Comment,
    competitiveListItemId: source?.CompetitiveListItemId,
    competitiveListItemState: source?.CompetitiveListItemState === null ? undefined : competitiveListItemStateEnumAdapter(source?.CompetitiveListItemState),
    id: source?.Id,
    supplierId: source?.SupplierId,
    supplierName: source?.SupplierName,
    value: source?.Value,
    value2: source?.Value2,
  };
}
