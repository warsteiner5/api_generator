import { OffersTable } from '../../models/offers-table.interface';
import { ApiOffersTableDto } from '../../../swagger/models/api-offers-table-dto';
import { apiOffersTableCharacteristicDtoAdapter } from './api-offers-table-characteristic-dto.adapter';
import { apiOffersTableCompetitiveListItemDtoAdapter } from './api-offers-table-competitive-list-item-dto.adapter';

export const apiOffersTableDtoAdapter = (source?: OffersTable | null): ApiOffersTableDto => {
  return {
    AdditionalSuppliersInformation: source?.additionalSuppliersInformation?.map((item) => apiOffersTableCompetitiveListItemDtoAdapter(item)),
    Characteristics: source?.characteristics?.map((item) => apiOffersTableCharacteristicDtoAdapter(item)),
    IsOnlyForSmsp: source?.isOnlyForSmsp,
    ManufacturerCountries: source?.manufacturerCountries,
    Manufacturers: source?.manufacturers,
  };
}
