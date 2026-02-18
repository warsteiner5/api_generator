import { FindParamsAlt } from '../../models/find-params-alt.interface';
import { ApiFindParamsAltDto } from '../../../swagger/models/api-find-params';

export function adaptApiFindParamsAltDto(source?: FindParamsAlt | null): ApiFindParamsAltDto {
  return (source ?? {}) as ApiFindParamsAltDto;
}
