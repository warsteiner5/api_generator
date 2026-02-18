import { ShortFilter } from '../../models/short-filter.interface';
import { ApiShortFilterDto } from '../../../swagger/models/api-short-filter-dto';

export function adaptApiShortFilterDto(source?: ShortFilter | null): ApiShortFilterDto {
  return (source ?? {}) as ApiShortFilterDto;
}
