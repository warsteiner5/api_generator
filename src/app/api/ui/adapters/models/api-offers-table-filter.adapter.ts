import { OffersTableFilterAlt } from '../../models/offers-table-filter-alt.interface';
import { ApiOffersTableFilterAltDto } from '../../../swagger/models/api-offers-table-filter';

export const apiOffersTableFilterAltDtoAdapter = (source?: OffersTableFilterAlt | null): ApiOffersTableFilterAltDto => {
  return (source ?? {}) as ApiOffersTableFilterAltDto;
}
