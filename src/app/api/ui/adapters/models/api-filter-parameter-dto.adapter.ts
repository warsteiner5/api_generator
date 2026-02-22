import { FilterParameter } from '../../models/filter-parameter.interface';
import { ApiFilterParameterDto } from '../../../swagger/models/api-filter-parameter-dto';

export const apiFilterParameterDtoAdapter = (source?: FilterParameter | null): ApiFilterParameterDto => {
  return {
    Name: source?.name,
    Value: source?.value,
  };
}
