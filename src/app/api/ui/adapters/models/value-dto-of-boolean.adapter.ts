import { ApiValueDtoOfBoolean } from '../../../swagger/models/api-value-dto-of-boolean';
import { ValueDtoOfBoolean } from '../../models/value-dto-of-boolean.interface';

export const valueDtoOfBooleanAdapter = (source?: ApiValueDtoOfBoolean | null): ValueDtoOfBoolean => {
  return {
    value: source?.Value,
  };
}
