import { ApplicationFilterObjectAlt } from '../../models/application-filter-object-alt.interface';
import { ApiApplicationFilterObjectAltDto } from '../../../swagger/models/api-application-filter-object';

export const apiApplicationFilterObjectAltDtoAdapter = (source?: ApplicationFilterObjectAlt | null): ApiApplicationFilterObjectAltDto => {
  return (source ?? {}) as ApiApplicationFilterObjectAltDto;
}
