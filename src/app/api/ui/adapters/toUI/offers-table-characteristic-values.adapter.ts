import { ApiOffersTableCharacteristicValuesDto } from '../../../swagger/models/api-offers-table-characteristic-values-dto';
import { OffersTableCharacteristicValues } from '../../models/offers-table-characteristic-values.interface';
import { adaptCompetitiveListItemStateEnumToUI } from './competitive-list-item-state-enum.adapter';

export function adaptOffersTableCharacteristicValuesToUI(source?: ApiOffersTableCharacteristicValuesDto | null): OffersTableCharacteristicValues {
  return {
    characteristicId: source?.CharacteristicId ?? 0,
    comment: source?.Comment ?? '',
    competitiveListItemId: source?.CompetitiveListItemId ?? 0,
    competitiveListItemState: adaptCompetitiveListItemStateEnumToUI(source?.CompetitiveListItemState),
    id: source?.Id ?? 0,
    supplierId: source?.SupplierId ?? 0,
    supplierName: source?.SupplierName ?? '',
    value: source?.Value ?? '',
    value2: source?.Value2 ?? '',
  };
}
