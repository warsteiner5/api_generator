import { ApiFindParamsAltDto } from '../../../swagger/models/api-find-params';
import { FindParamsAlt } from '../../models/find-params-alt.interface';

export function adaptFindParamsAltToUI(source?: ApiFindParamsAltDto | null): FindParamsAlt {
  return (source ?? {}) as FindParamsAlt;
}
