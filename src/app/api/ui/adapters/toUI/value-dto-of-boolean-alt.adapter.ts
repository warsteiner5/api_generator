import { ApiValueDtoOfBooleanAltDto } from '../../../swagger/models/api-value-dto-of-boolean';
import { ValueDtoOfBooleanAlt } from '../../models/value-dto-of-boolean-alt.interface';

export function adaptValueDtoOfBooleanAltToUI(source?: ApiValueDtoOfBooleanAltDto | null): ValueDtoOfBooleanAlt {
  return {
    value: source?.Value ?? false,
  };
}
