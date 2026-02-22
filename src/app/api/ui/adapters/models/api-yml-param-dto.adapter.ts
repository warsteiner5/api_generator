import { YmlParam } from '../../models/yml-param.interface';
import { ApiYmlParamDto } from '../../../swagger/models/api-yml-param-dto';

export const apiYmlParamDtoAdapter = (source?: YmlParam | null): ApiYmlParamDto => {
  return {
    Measure: source?.measure,
    Name: source?.name,
    Value: source?.value,
  };
}
