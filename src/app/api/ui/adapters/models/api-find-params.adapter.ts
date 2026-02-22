import { FindParamsAlt } from '../../models/find-params-alt.interface';
import { ApiFindParamsAltDto } from '../../../swagger/models/api-find-params';

export const apiFindParamsAltDtoAdapter = (source?: FindParamsAlt | null): ApiFindParamsAltDto => {
  return (source ?? {}) as ApiFindParamsAltDto;
}
