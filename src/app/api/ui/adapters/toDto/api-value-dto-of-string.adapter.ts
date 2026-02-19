import { ValueDtoOfString } from '../../models/value-dto-of-string.interface';
import { ApiValueDtoOfString } from '../../../swagger/models/api-value-dto-of-string';

export function adaptApiValueDtoOfString(source?: ValueDtoOfString | null): ApiValueDtoOfString {
  return {
    Value: source?.value,
  };
}
