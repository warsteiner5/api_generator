import { FindParamsAlt } from '../../models/find-params-alt.interface';
import { ApiFindParamsAltDto } from '../../../swagger/models/api-find-params';
import { apiBaseFilterObjectAltDtoAdapter } from './api-base-filter-object.adapter';

export const apiFindParamsAltDtoAdapter = (source?: FindParamsAlt | null): ApiFindParamsAltDto => {
  return {
    ...apiBaseFilterObjectAltDtoAdapter(source as unknown as Parameters<typeof apiBaseFilterObjectAltDtoAdapter>[0]),
    Name: source?.name,
  };
}
