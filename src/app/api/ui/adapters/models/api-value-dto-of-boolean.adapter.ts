import { ValueDtoOfBoolean } from '../../models/value-dto-of-boolean.interface';
import { ApiValueDtoOfBoolean } from '../../../swagger/models/api-value-dto-of-boolean';

export const apiValueDtoOfBooleanAdapter = (source?: ValueDtoOfBoolean | null): ApiValueDtoOfBoolean => {
  return {
    Value: source?.value,
  };
}
