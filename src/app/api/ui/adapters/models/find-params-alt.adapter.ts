import { ApiFindParamsAltDto } from '../../../swagger/models/api-find-params';
import { FindParamsAlt } from '../../models/find-params-alt.interface';
import { baseFilterObjectAltAdapter } from './base-filter-object-alt.adapter';

export const findParamsAltAdapter = (source?: ApiFindParamsAltDto | null): FindParamsAlt => {
  return {
    ...baseFilterObjectAltAdapter(source as unknown as Parameters<typeof baseFilterObjectAltAdapter>[0]),
    name: source?.Name,
  };
}
