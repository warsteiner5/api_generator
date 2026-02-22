import { ShortFilter } from '../../models/short-filter.interface';
import { ApiShortFilterDto } from '../../../swagger/models/api-short-filter-dto';

export const apiShortFilterDtoAdapter = (source?: ShortFilter | null): ApiShortFilterDto => {
  return (source ?? {}) as ApiShortFilterDto;
}
