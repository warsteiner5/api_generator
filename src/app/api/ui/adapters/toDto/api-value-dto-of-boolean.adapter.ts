import { ValueDtoOfBoolean } from '../../models/value-dto-of-boolean.interface';
import { ApiValueDtoOfBoolean } from '../../../swagger/models/api-value-dto-of-boolean';

export function adaptApiValueDtoOfBoolean(source?: ValueDtoOfBoolean | null): ApiValueDtoOfBoolean {
  return {
    Value: source?.value,
  };
}
