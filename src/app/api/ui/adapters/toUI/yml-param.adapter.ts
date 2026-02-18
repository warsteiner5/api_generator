import { ApiYmlParamDto } from '../../../swagger/models/api-yml-param-dto';
import { YmlParam } from '../../models/yml-param.interface';

export function adaptYmlParamToUI(source?: ApiYmlParamDto | null): YmlParam {
  return {
    measure: source?.Measure ?? '',
    name: source?.Name ?? '',
    value: source?.Value ?? '',
  };
}
