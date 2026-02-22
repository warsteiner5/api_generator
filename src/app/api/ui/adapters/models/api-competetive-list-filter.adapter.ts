import { CompetetiveListFilterAlt } from '../../models/competetive-list-filter-alt.interface';
import { ApiCompetetiveListFilterAltDto } from '../../../swagger/models/api-competetive-list-filter';

export const apiCompetetiveListFilterAltDtoAdapter = (source?: CompetetiveListFilterAlt | null): ApiCompetetiveListFilterAltDto => {
  return (source ?? {}) as ApiCompetetiveListFilterAltDto;
}
