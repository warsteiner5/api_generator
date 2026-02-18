import { ApiOffersTableDto } from '../../../swagger/models/api-offers-table-dto';
import { OffersTable } from '../../models/offers-table.interface';
import { adaptOffersTableCharacteristicToUI } from './offers-table-characteristic.adapter';
import { adaptOffersTableCompetitiveListItemToUI } from './offers-table-competitive-list-item.adapter';

export function adaptOffersTableToUI(source?: ApiOffersTableDto | null): OffersTable {
  return {
    additionalSuppliersInformation: (source?.AdditionalSuppliersInformation ?? []).map((item) => adaptOffersTableCompetitiveListItemToUI(item)),
    characteristics: (source?.Characteristics ?? []).map((item) => adaptOffersTableCharacteristicToUI(item)),
    isOnlyForSmsp: source?.IsOnlyForSmsp ?? false,
    manufacturerCountries: source?.ManufacturerCountries ?? [],
    manufacturers: source?.Manufacturers ?? [],
  };
}
