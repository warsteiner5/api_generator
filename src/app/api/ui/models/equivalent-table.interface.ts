import { EquivalentTableCharacteristic } from './equivalent-table-characteristic.interface';
import { EquivalentTableCompetitiveListItem } from './equivalent-table-competitive-list-item.interface';

export interface EquivalentTable {
  additionalSuppliersInformation: EquivalentTableCompetitiveListItem[];
  characteristics: EquivalentTableCharacteristic[];
  isOnlyForSmsp: boolean;
  manufacturerCountries: string[];
  manufacturers: string[];
}
