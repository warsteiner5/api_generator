import { ApiValueDtoOfString } from '../../../swagger/models/api-value-dto-of-string';
import { ValueDtoOfString } from '../../models/value-dto-of-string.interface';

export function adaptValueDtoOfStringToUI(source?: ApiValueDtoOfString | null): ValueDtoOfString {
  return {
    value: source?.Value ?? '',
  };
}
