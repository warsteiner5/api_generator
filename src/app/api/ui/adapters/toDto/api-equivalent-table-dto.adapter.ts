import { EquivalentTable } from '../../models/equivalent-table.interface';
import { ApiEquivalentTableDto } from '../../../swagger/models/api-equivalent-table-dto';
import { adaptApiEquivalentTableCharacteristicDto } from './api-equivalent-table-characteristic-dto.adapter';
import { adaptApiEquivalentTableCompetitiveListItemDto } from './api-equivalent-table-competitive-list-item-dto.adapter';

export function adaptApiEquivalentTableDto(source?: EquivalentTable | null): ApiEquivalentTableDto {
  return {
    AdditionalSuppliersInformation: (source?.additionalSuppliersInformation ?? []).map((item) => adaptApiEquivalentTableCompetitiveListItemDto(item)),
    Characteristics: (source?.characteristics ?? []).map((item) => adaptApiEquivalentTableCharacteristicDto(item)),
    IsOnlyForSmsp: source?.isOnlyForSmsp,
    ManufacturerCountries: source?.manufacturerCountries ?? [],
    Manufacturers: source?.manufacturers ?? [],
  };
}
