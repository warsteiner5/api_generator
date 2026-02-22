import { EquivalentTable } from '../../models/equivalent-table.interface';
import { ApiEquivalentTableDto } from '../../../swagger/models/api-equivalent-table-dto';
import { apiEquivalentTableCharacteristicDtoAdapter } from './api-equivalent-table-characteristic-dto.adapter';
import { apiEquivalentTableCompetitiveListItemDtoAdapter } from './api-equivalent-table-competitive-list-item-dto.adapter';

export const apiEquivalentTableDtoAdapter = (source?: EquivalentTable | null): ApiEquivalentTableDto => {
  return {
    AdditionalSuppliersInformation: source?.additionalSuppliersInformation?.map((item) => apiEquivalentTableCompetitiveListItemDtoAdapter(item)),
    Characteristics: source?.characteristics?.map((item) => apiEquivalentTableCharacteristicDtoAdapter(item)),
    IsOnlyForSmsp: source?.isOnlyForSmsp,
    ManufacturerCountries: source?.manufacturerCountries,
    Manufacturers: source?.manufacturers,
  };
}
