import { ApplicationFilterObjectAlt } from '../../models/application-filter-object-alt.interface';
import { ApiApplicationFilterObjectAltDto } from '../../../swagger/models/api-application-filter-object';

export function adaptApiApplicationFilterObjectAltDto(source?: ApplicationFilterObjectAlt | null): ApiApplicationFilterObjectAltDto {
  return (source ?? {}) as ApiApplicationFilterObjectAltDto;
}
