import { ApiEquivalentTableDto } from '../../../swagger/models/api-equivalent-table-dto';
import { EquivalentTable } from '../../models/equivalent-table.interface';
import { adaptEquivalentTableCharacteristicToUI } from './equivalent-table-characteristic.adapter';
import { adaptEquivalentTableCompetitiveListItemToUI } from './equivalent-table-competitive-list-item.adapter';

export function adaptEquivalentTableToUI(source?: ApiEquivalentTableDto | null): EquivalentTable {
  return {
    additionalSuppliersInformation: (source?.AdditionalSuppliersInformation ?? []).map((item) => adaptEquivalentTableCompetitiveListItemToUI(item)),
    characteristics: (source?.Characteristics ?? []).map((item) => adaptEquivalentTableCharacteristicToUI(item)),
    isOnlyForSmsp: source?.IsOnlyForSmsp ?? false,
    manufacturerCountries: source?.ManufacturerCountries ?? [],
    manufacturers: source?.Manufacturers ?? [],
  };
}
