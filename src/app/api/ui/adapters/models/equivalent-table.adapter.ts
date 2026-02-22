import { ApiEquivalentTableDto } from '../../../swagger/models/api-equivalent-table-dto';
import { EquivalentTable } from '../../models/equivalent-table.interface';
import { equivalentTableCharacteristicAdapter } from './equivalent-table-characteristic.adapter';
import { equivalentTableCompetitiveListItemAdapter } from './equivalent-table-competitive-list-item.adapter';

export const equivalentTableAdapter = (source?: ApiEquivalentTableDto | null): EquivalentTable => {
  return {
    additionalSuppliersInformation: source?.AdditionalSuppliersInformation?.map((item) => equivalentTableCompetitiveListItemAdapter(item)),
    characteristics: source?.Characteristics?.map((item) => equivalentTableCharacteristicAdapter(item)),
    isOnlyForSmsp: source?.IsOnlyForSmsp,
    manufacturerCountries: source?.ManufacturerCountries,
    manufacturers: source?.Manufacturers,
  };
}
