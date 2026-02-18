import { ApiShortFilterDto } from '../../../swagger/models/api-short-filter-dto';
import { ShortFilter } from '../../models/short-filter.interface';

export function adaptShortFilterToUI(source?: ApiShortFilterDto | null): ShortFilter {
  return (source ?? {}) as ShortFilter;
}
