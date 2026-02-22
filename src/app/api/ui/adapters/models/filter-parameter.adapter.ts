import { ApiFilterParameterDto } from '../../../swagger/models/api-filter-parameter-dto';
import { FilterParameter } from '../../models/filter-parameter.interface';

export const filterParameterAdapter = (source?: ApiFilterParameterDto | null): FilterParameter => {
  return {
    name: source?.Name,
    value: source?.Value,
  };
}
