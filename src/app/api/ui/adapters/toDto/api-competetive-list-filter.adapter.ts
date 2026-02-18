import { CompetetiveListFilterAlt } from '../../models/competetive-list-filter-alt.interface';
import { ApiCompetetiveListFilterAltDto } from '../../../swagger/models/api-competetive-list-filter';

export function adaptApiCompetetiveListFilterAltDto(source?: CompetetiveListFilterAlt | null): ApiCompetetiveListFilterAltDto {
  return (source ?? {}) as ApiCompetetiveListFilterAltDto;
}
