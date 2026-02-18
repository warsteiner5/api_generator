import { OffersTableFilterAlt } from '../../models/offers-table-filter-alt.interface';
import { ApiOffersTableFilterAltDto } from '../../../swagger/models/api-offers-table-filter';

export function adaptApiOffersTableFilterAltDto(source?: OffersTableFilterAlt | null): ApiOffersTableFilterAltDto {
  return (source ?? {}) as ApiOffersTableFilterAltDto;
}
