import { ApiOffersTableDto } from '../../../swagger/models/api-offers-table-dto';
import { OffersTable } from '../../models/offers-table.interface';
import { offersTableCharacteristicAdapter } from './offers-table-characteristic.adapter';
import { offersTableCompetitiveListItemAdapter } from './offers-table-competitive-list-item.adapter';

export const offersTableAdapter = (source?: ApiOffersTableDto | null): OffersTable => {
  return {
    additionalSuppliersInformation: source?.AdditionalSuppliersInformation?.map((item) => offersTableCompetitiveListItemAdapter(item)),
    characteristics: source?.Characteristics?.map((item) => offersTableCharacteristicAdapter(item)),
    isOnlyForSmsp: source?.IsOnlyForSmsp,
    manufacturerCountries: source?.ManufacturerCountries,
    manufacturers: source?.Manufacturers,
  };
}
