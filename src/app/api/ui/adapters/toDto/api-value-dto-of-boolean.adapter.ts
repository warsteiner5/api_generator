import { ValueDtoOfBooleanAlt } from '../../models/value-dto-of-boolean-alt.interface';
import { ApiValueDtoOfBooleanAltDto } from '../../../swagger/models/api-value-dto-of-boolean';

export function adaptApiValueDtoOfBooleanAltDto(source?: ValueDtoOfBooleanAlt | null): ApiValueDtoOfBooleanAltDto {
  return {
    Value: source?.value,
  };
}
