import { OffersTableCharacteristic } from './offers-table-characteristic.interface';
import { OffersTableCompetitiveListItem } from './offers-table-competitive-list-item.interface';

export interface OffersTable {
  additionalSuppliersInformation: OffersTableCompetitiveListItem[];
  characteristics: OffersTableCharacteristic[];
  isOnlyForSmsp: boolean;
  manufacturerCountries: string[];
  manufacturers: string[];
}
