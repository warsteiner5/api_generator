import { ApiOffersTableFilterAltDto } from '../../../swagger/models/api-offers-table-filter';
import { OffersTableFilterAlt } from '../../models/offers-table-filter-alt.interface';

export function adaptOffersTableFilterAltToUI(source?: ApiOffersTableFilterAltDto | null): OffersTableFilterAlt {
  return (source ?? {}) as OffersTableFilterAlt;
}
