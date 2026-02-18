import { ValueDtoOfStringAlt } from '../../models/value-dto-of-string-alt.interface';
import { ApiValueDtoOfStringAltDto } from '../../../swagger/models/api-value-dto-of-string';

export function adaptApiValueDtoOfStringAltDto(source?: ValueDtoOfStringAlt | null): ApiValueDtoOfStringAltDto {
  return {
    Value: source?.value,
  };
}
