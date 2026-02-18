import { OffersTable } from '../../models/offers-table.interface';
import { ApiOffersTableDto } from '../../../swagger/models/api-offers-table-dto';
import { adaptApiOffersTableCharacteristicDto } from './api-offers-table-characteristic-dto.adapter';
import { adaptApiOffersTableCompetitiveListItemDto } from './api-offers-table-competitive-list-item-dto.adapter';

export function adaptApiOffersTableDto(source?: OffersTable | null): ApiOffersTableDto {
  return {
    AdditionalSuppliersInformation: (source?.additionalSuppliersInformation ?? []).map((item) => adaptApiOffersTableCompetitiveListItemDto(item)),
    Characteristics: (source?.characteristics ?? []).map((item) => adaptApiOffersTableCharacteristicDto(item)),
    IsOnlyForSmsp: source?.isOnlyForSmsp,
    ManufacturerCountries: source?.manufacturerCountries ?? [],
    Manufacturers: source?.manufacturers ?? [],
  };
}
